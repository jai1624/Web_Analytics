import numpy as np
import pickle
import sqlite3


#user_input = list(map(float,(input("Enter input values: ").split(","))))
user_input = [float(s) for s in input('Enter value for 60 input columns: ').split(",",maxsplit=60)[:60]]
print("List of inputs : ", user_input)

def sql_connection(predict_out):
    # connection = sqlite3.connect(':memeory:')
    connection = sqlite3.connect('web_analytics.db')
    # create a cursor object from the cursor class
    cur = connection.cursor()
    # file path
    try:
        cur.execute("SELECT * FROM wad").fetchall()
        # db.close()
    except sqlite3.OperationalError:
        cur.execute(
            '''
            CREATE TABLE wad (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
                                  Administrative REAL,Administrative_Duration REAL,Informational REAL,
           Informational_Duration REAL ,ProductRelated REAL,ProductRelated_Duration REAL,
           BounceRates REAL,ExitRates REAL,PageValues REAL,SpecialDay REAL,Weekend INT,
           Month_Dec INTEGER, Month_Feb INTEGER, Month_Jul INTEGER,Month_June INTEGER,Month_Mar INTEGER,
           Month_May INTEGER,Month_Nov INTEGER,Month_Oct INTEGER,Month_Sep INTEGER,
           OperatingSystems_2 INTEGER,OperatingSystems_3 INTEGER,OperatingSystems_4 INTEGER,
           OperatingSystems_5 INTEGER,OperatingSystems_6 INTEGER,OperatingSystems_7 INTEGER,
           OperatingSystems_8 INTEGER,Browser_2 INTEGER,Browser_3 INTEGER,Browser_4 INTEGER,
           Browser_5 INTEGER,Browser_6 INTEGER,Browser_7 INTEGER,Browser_8 INTEGER,Browser_9 INTEGER,
           Browser_10 INTEGER,Browser_11 INTEGER,Browser_12 INTEGER,Browser_13 INTEGER,TrafficType_2 INTEGER,
           TrafficType_3 INTEGER,TrafficType_4 INTEGER,TrafficType_5 INTEGER,TrafficType_6 INTEGER,
           TrafficType_7 INTEGER,TrafficType_8 INTEGER,TrafficType_9 INTEGER,TrafficType_10 INTEGER,
           TrafficType_11 INTEGER,TrafficType_12 INTEGER, TrafficType_13 INTEGER,TrafficType_14 INTEGER,
           TrafficType_15 INTEGER,TrafficType_16 INTEGER,TrafficType_17 INTEGER,TrafficType_18 INTEGER,
           TrafficType_19 INTEGER,TrafficType_20 INTEGER,VisitorType_Other INTEGER,
           VisitorType_Returning_Visitor INTEGER,Output TEXT)
            ''')
    final_output = user_input
    final_output.append(predict_out)
    print("enter sql",final_output)
    sql = """INSERT INTO wad(Administrative, Administrative_Duration, Informational, \
            Informational_Duration, ProductRelated, ProductRelated_Duration, \
            BounceRates, ExitRates, PageValues, SpecialDay, Weekend,\
            Month_Dec, Month_Feb, Month_Jul, Month_June, Month_Mar, \
            Month_May, Month_Nov, Month_Oct, Month_Sep, \
            OperatingSystems_2, OperatingSystems_3, OperatingSystems_4, \
            OperatingSystems_5, OperatingSystems_6, OperatingSystems_7, \
            OperatingSystems_8, Browser_2, Browser_3, Browser_4, \
            Browser_5, Browser_6, Browser_7, Browser_8,Browser_9, \
            Browser_10, Browser_11, Browser_12, Browser_13, TrafficType_2,\
            TrafficType_3, TrafficType_4, TrafficType_5, TrafficType_6,\
            TrafficType_7, TrafficType_8, TrafficType_9, TrafficType_10,\
            TrafficType_11, TrafficType_12, TrafficType_13, TrafficType_14,\
            TrafficType_15, TrafficType_16, TrafficType_17, TrafficType_18,\
            TrafficType_19, TrafficType_20, VisitorType_Other,\
            VisitorType_Returning_Visitor,Output) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,\
          ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?);"""
    cur.execute(sql,final_output)

    # committing our connection
    print('Command executed successfully!!!')
    connection.commit()
    # close our connection
    connection.close()

def prediction():

    input_numpy_array = np.asarray(user_input)
    input_reshaped = input_numpy_array.reshape(1,-1)
    model = pickle.load(open("E://database_sql//xgb_classifier.pkl", "rb"))
    prediction = model.predict(input_reshaped)
    if prediction == 1:
        result_1 = 'This customer will end-up buying things.\n(class = True/1 Revenue).'
        print('This customer will end-up buying things.\n(class = True/1 Revenue).')
        #return result_1
    else:
        result_0 = 'This customer wont end-up buying things.(class = False/0 Revenue).'
        #print('This customer wont end-up buying things.(class = False/0 Revenue).')
        return result_0

sql_connection(prediction())