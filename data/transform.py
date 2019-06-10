import os
import sys
sys.path.insert(0, './lib')
# import Miner # Todo
from mlxtend.frequent_patterns import apriori
from mlxtend.frequent_patterns import association_rules
import pandas as pd
import numpy as np
import json

# config
input_file = 'input/demo-data.csv'
transaction_id = 'clientID'
product_id = 'locLVL2'
product_groups = [
  'locLVL1'
  ]
out_js = './../html/loclvl2.js'
max_len = 2
min_support = 0.003
min_threshold_metric = 'lift'
min_threshold = 0


dir_path = os.path.dirname(os.path.realpath(__file__))



print('read "' + input_file + '" to dataframe')
df = pd.read_csv(dir_path + '/' + input_file)
print(df.head())

# filter
# df = df.loc[(df['sourceMedium'] == "newsletter / email")]
# print(df.head())



df.rename(columns={transaction_id: 'transaction_id'}, inplace=True)
df.rename(columns={product_id: 'product_id'}, inplace=True)

fields = ['product_id']
for i in range(0, len(product_groups)):
  key = 'group_' + str(i)
  df.rename(columns={product_groups[i]: key}, inplace=True)
  fields.append(key)

# get nodes
print('get products')
df['count'] = 1
nodes = df.groupby(fields)['count'].count().reset_index()
print(nodes.head())
print('found ' + str(len(nodes)) + ' nodes')
nodes.to_json('./output/nodes.json', orient='records')


# get edges
basket = (df
          .groupby(['transaction_id', 'product_id'])['count']
          .sum().unstack().reset_index().fillna(0)
          .set_index('transaction_id'))

def one_hot_encode(x):
  if x <= 0:
    return 0
  if x >= 1:
    return 1

print('one hot encode')
basket_sets = basket.applymap(one_hot_encode)


print('get edges')
edges_temp = {}
def get_edges(series):
  global edges_temp
  arr = []
  values = series.tolist()
  for i in range(0, len(values)):
    if values[i] > 0:
      arr.append(series.index.values[i])
  out = []
  for i in range(0, len(arr)):
    for j in range(i, len(arr)):
      if(i != j):
        key = arr[i] + '<==>' + arr[j]
        try:
          edges_temp[key] = edges_temp[key] + 1
        except:
          edges_temp[key] = 1

basket_sets.apply(lambda x : get_edges(x), axis=1)
edges = []
for key, counter in edges_temp.items():
  edges.append({
    'link' : key.split('<==>'),
    'count' : counter
  })
print('found ' + str(len(edges)) + ' edges')
edges = pd.DataFrame(edges)
edges.to_json('./output/edges.json', orient='records')



print('frequent itemsets')
frequent_itemsets = apriori(basket_sets, min_support=min_support, use_colnames=True, max_len=max_len)
frequent_itemsets.sort_values('support', inplace=True, ascending=False,)


print('rules')
rules = association_rules(frequent_itemsets, metric=min_threshold_metric, min_threshold=min_threshold)
rules.sort_values('lift', inplace=True, ascending=False)

print('found ' + str(len(rules)) + ' rules')
rules.to_json('./output/rules.json', orient='records')


with open(out_js, "w") as fs:
  fs.truncate(0)
  fs.write("var loadeddata = {\n")
  fs.write('products : ' + nodes.to_json(orient='records') + ',\n')
  # fs.write('var links = ' + edges.to_json(orient='records') + '\n')
  fs.write('rules : ' + rules.to_json(orient='records') + ',\n')
  fs.write('}')

# basket.sort_values('korfu', inplace=True, ascending=False)
