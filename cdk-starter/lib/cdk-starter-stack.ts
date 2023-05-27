import * as cdk from 'aws-cdk-lib';
import {Duration} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {Bucket, CfnBucket} from "aws-cdk-lib/aws-s3";

class L3Bucket extends Construct {
  constructor(scope: Construct, id: string, expiration: number) {
    super(scope, id);

    new Bucket(this, 'L3Bucket', {
      lifecycleRules: [{
        expiration: Duration.days(expiration)
      }]
    });
  }
}

export class CdkStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create a s3 bucket as L1 construct
    new CfnBucket(this, 'MyL1Bucket', {
      lifecycleConfiguration: {
        rules: [{
          expirationInDays: 1,
          status: 'Enabled'
        }]
      }
    });

    // create a s3 bucket as L2 construct
    new Bucket(this, 'MyL2Bucket', {
      lifecycleRules: [{
        expiration: Duration.days(2)
      }]
    });

    // create a s3 bucket as L3 construct
    new L3Bucket(this, 'MyL3Bucket', 3);

  }
}
