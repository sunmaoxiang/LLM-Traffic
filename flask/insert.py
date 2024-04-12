from datetime import datetime, timedelta
import random
import sqlite3
import numpy as np

DB_NAME="city_data.db"
insert_query_cityspeed="INSERT INTO CityTrafficSpeed (city_name, node_id, time_stamp, real_average_speed, predict_average_speed) VALUES (?, ?, ?, ?,?)"
insert_query_distance="INSERT INTO CityNodeDistance (from_node, to_node, distance) VALUES (?, ?, ?)"

def sql_insert(db_name:str, insert_query:str, data:list):
    # 连接数据库或创建数据库文件
    conn = sqlite3.connect(db_name)
        
    # 创建游标对象
    cursor = conn.cursor()

    cursor.executemany(insert_query, data)

    # 提交事务
    conn.commit()

    # 关闭连接
    conn.close()



def indexToTime(index: int) -> str:
    base_time = datetime(2018, 5, 1)
    time_interval = timedelta(minutes=5)
    target_time = base_time + (time_interval * index)
    return target_time.isoformat()

def generateRandomNumber():
    random_float = round(random.uniform(-5, 5), 2)
    return random_float
def insertSpeed():
    path = "/root/workspace/langchian/PeMSD4/pems04.npz"
    needToInsert = []

    data = np.load(path)['data']
    for i in range(288):
    # 遍历所有节点
        for j in range(data.shape[1]):
            # 获取第一个指标
            value = data[i, j, 0]
            # 在这里对value进行你需要的操作
            # print(f"时间戳 {indexToTime(i)}，节点 {j+1} 的第一个指标值为: {value}")
            needToInsert.append( ("PEMS4",j, indexToTime(i), value, value + generateRandomNumber()))

    sql_insert(DB_NAME,insert_query_cityspeed,needToInsert)
    

insertSpeed()