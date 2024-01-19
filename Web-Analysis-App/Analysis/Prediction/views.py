# myapp/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PredictionResult
from .serializers import PredictionResultSerializer
import numpy as np
import pickle


class PredictionAPIView(APIView):
    def post(self, request):
        user_input = request.data.get('user_input', [])
        print(user_input)

        if len(user_input) != 60:
            return Response({'error': 'Invalid input length.'}, status=status.HTTP_400_BAD_REQUEST)

        prediction = self.make_prediction(user_input)
        result = 'This customer will end-up buying things.\n(class = True/1 Revenue).' if prediction == 1 \
            else 'This customer wont end-up buying things.(class = False/0 Revenue).'

        # Save to the database
        prediction_result = PredictionResult(
            Administrative=user_input[0],
            Administrative_Duration=user_input[1],
            Informational=user_input[2],
            Informational_Duration=user_input[3],
            ProductRelated=user_input[4],
            ProductRelated_Duration=user_input[5],
            BounceRates=user_input[6],
            ExitRates=user_input[7],
            PageValues=user_input[8],
            SpecialDay=user_input[9],
            Weekend=user_input[10],
            Month_Dec=user_input[11],
            Month_Feb=user_input[12],
            Month_Jul=user_input[13],
            Month_June=user_input[14],
            Month_Mar=user_input[15],
            Month_May=user_input[16],
            Month_Nov=user_input[17],
            Month_Oct=user_input[18],
            Month_Sep=user_input[19],
            OperatingSystems_2=user_input[20],
            OperatingSystems_3=user_input[21],
            OperatingSystems_4=user_input[22],
            OperatingSystems_5=user_input[23],
            OperatingSystems_6=user_input[24],
            OperatingSystems_7=user_input[25],
            OperatingSystems_8=user_input[26],
            Browser_2=user_input[27],
            Browser_3=user_input[28],
            Browser_4=user_input[29],
            Browser_5=user_input[30],
            Browser_6=user_input[31],
            Browser_7=user_input[32],
            Browser_8=user_input[33],
            Browser_9=user_input[34],
            Browser_10=user_input[35],
            Browser_11=user_input[36],
            Browser_12=user_input[37],
            Browser_13=user_input[38],
            TrafficType_2=user_input[39],
            TrafficType_3=user_input[40],
            TrafficType_4=user_input[41],
            TrafficType_5=user_input[42],
            TrafficType_6=user_input[43],
            TrafficType_7=user_input[44],
            TrafficType_8=user_input[45],
            TrafficType_9=user_input[46],
            TrafficType_10=user_input[47],
            TrafficType_11=user_input[48],
            TrafficType_12=user_input[49],
            TrafficType_13=user_input[50],
            TrafficType_14=user_input[51],
            TrafficType_15=user_input[52],
            TrafficType_16=user_input[53],
            TrafficType_17=user_input[54],
            TrafficType_18=user_input[55],
            TrafficType_19=user_input[56],
            TrafficType_20=user_input[57],
            VisitorType_Other=user_input[58],
            VisitorType_Returning_Visitor=user_input[59],
            Output=result
        )
        prediction_result.save()

        # Serialize and return the response
        serializer = PredictionResultSerializer(prediction_result)
        return Response({'result': result, 'prediction_data': serializer.data}, status=status.HTTP_200_OK)

    def make_prediction(self, user_input):
        input_numpy_array = np.asarray(user_input)
        input_reshaped = input_numpy_array.reshape(1, -1)
        model = pickle.load(open("E:\\Web-Analysis\\Analysis\\xgb_classifier.pkl", "rb"))
        prediction = model.predict(input_reshaped)
        return prediction
