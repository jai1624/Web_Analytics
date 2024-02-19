import numpy as np
import pickle

#To Get User Input
user_input = [float(s) for s in input('Enter value for 60 input columns: ').split(",",maxsplit=60)[:60]]
print("List of inputs : ", user_input)

#prediction CODE
def prediction(user_input):
    input_numpy_array = np.asarray(user_input)
    input_reshaped = input_numpy_array.reshape(1,-1)
    model = pickle.load(open("E:xgb_classifier.pkl", "rb"))
    prediction = model.predict(input_reshaped)
    if prediction == 1:
        result_1 = 'This customer will end-up buying things.\n(class = True/1 Revenue).'
        print('This customer will end-up buying things.\n(class = True/1 Revenue).')
        return result_1
    else:
        result_0 = 'This customer wont end-up buying things.(class = False/0 Revenue).'
        print('This customer wont end-up buying things.(class = False/0 Revenue).')
        return result_0

predict_out = prediction(user_input)
final_output = user_input
# This final output append it to db
final_output.append(predict_out)
print("test",final_output)

# Example Input to the data
#input_to_test = -0.990128076,-0.996658527,-0.52048939,-0.491697374,0.250488013,-0.460348834,-0.799208869,-1.35836211,-0.529409168,-0.336019957,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1
