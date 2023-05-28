#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {PhotoStack} from "../lib/PhotoStack";
import {PhotoHandlerStack} from "../lib/PhotoHandlerStack";

const app = new cdk.App();

const photoStack = new PhotoStack(app, 'PhotoStack');
new PhotoHandlerStack(app, 'PhotoHandlerStack', {
  targetBucketArn: photoStack.photoBucketArn
});