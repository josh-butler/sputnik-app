.PHONY: deploy \
npm-install npm-build \
s3-sync cf-validate

-include Makefile.env

AWS_REGION ?= us-east-1
AWS_PROFILE ?= default

deploy: npm-install npm-build s3-sync cf-invalidate

npm-install: 
	npm install

npm-build: 
	npm run build

s3-sync: 
	aws s3 sync build s3://${HOST_BUCKET} --delete --cache-control no-cache --region ${AWS_REGION} --profile ${AWS_PROFILE}
	
cf-invalidate:
	aws configure set preview.cloudfront true
	aws cloudfront create-invalidation --distribution-id ${DISTRIBUTION_ID} --paths "/*"  --region ${AWS_REGION} --profile ${AWS_PROFILE}