import {Construct} from "constructs";
import * as cdk from "aws-cdk-lib";
import {Fn} from "aws-cdk-lib";
import {Bucket} from "aws-cdk-lib/aws-s3";

export class PhotoStack extends cdk.Stack {

  private stackSuffix: string;
  public readonly photoBucketArn: string;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.initializeSuffix();

    const photoBucket = new Bucket(this, 'PhotoBucket', {
      bucketName: `photosbucket-${this.stackSuffix}`
    });

    this.photoBucketArn = photoBucket.bucketArn;
  }

  private initializeSuffix() {
    const shortStackId = Fn.select(2, Fn.split('/', this.stackId));
    this.stackSuffix = Fn.select(4, Fn.split('-', shortStackId));
  }
}