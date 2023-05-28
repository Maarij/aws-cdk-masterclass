import {Construct} from "constructs";
import * as cdk from "aws-cdk-lib";
import {Bucket, CfnBucket} from "aws-cdk-lib/aws-s3";

export class PhotoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

   const myBucket = new Bucket(this, 'PhotosBucket', {
      bucketName: 'photosbucket-randomUuid90aisfdj'
    });

    (myBucket.node.defaultChild as CfnBucket).overrideLogicalId('PhotosBucket64a9su90');

    // create a new resource
    // delete the old one
  }
}