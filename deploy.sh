#!/bin/bash
ng build --prod --aot 
aws s3 cp ./dist s3://reprogramming-habits --recursive