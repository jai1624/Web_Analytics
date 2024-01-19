FROM python:3.9-slim

# USER app
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY xgb_classifier.pkl /code/
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/