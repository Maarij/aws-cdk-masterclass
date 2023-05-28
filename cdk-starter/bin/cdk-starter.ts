#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {PhotoStack} from "../lib/PhotoStack";

const app = new cdk.App();
new PhotoStack(app, 'PhotoStack');