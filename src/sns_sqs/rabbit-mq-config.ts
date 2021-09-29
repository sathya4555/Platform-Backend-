module.exports = {
  Topics: [
    {
      TopicName: "USERS1_ADD",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "USERS1_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["USERS1_ADDED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS1_ADD-USERS1_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
    },
    {TopicName: "USERS1_UPDATE",
      Publishers: ["API_GATEWAY_SERVICE"],
      Method: "POST",
      Subscribers: [
        {
          Service: "USERS1_SERVICE",
          Function: "InsertChannel",
          OnSuccessTopicsToPush: ["USERS1_UPDATED"],
          OnFailureTopicsToPush: ["ERROR_RECEIVER"],
          QueueName: "USERS1_UPDATE-USERS1_SERVICE",
          QueueUrl:
            "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
          QueueArn:
            "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
          SubscriptionArn:
            "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
        },
      ],
      TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
    },
  {  TopicName: "USERS1_DELETE",
    Publishers: ["API_GATEWAY_SERVICE"],
    Method: "POST",
    Subscribers: [
      {
        Service: "USERS1_SERVICE",
        Function: "InsertChannel",
        OnSuccessTopicsToPush: ["USERS1_DELETED"],
        OnFailureTopicsToPush: ["ERROR_RECEIVER"],
        QueueName: "USERS1_DELETE-USERS1_SERVICE",
        QueueUrl:
          "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
        QueueArn:
          "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
        SubscriptionArn:
          "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
      },
    ],
    TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
  },
  {
    TopicName: "TENANTS1_ADD",
    Publishers: ["API_GATEWAY_SERVICE"],
    Method: "POST",
    Subscribers: [
      {
        Service: "TENANTS1_SERVICE",
        Function: "InsertChannel",
        OnSuccessTopicsToPush: ["TENANTS1_ADDED"],
        OnFailureTopicsToPush: ["ERROR_RECEIVER"],
        QueueName: "TENANTS1_ADD-TENANTS1_SERVICE",
        QueueUrl:
          "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
        QueueArn:
          "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
        SubscriptionArn:
          "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
      },
    ],
    TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
  },
  {TopicName: "TENANTS1_UPDATE",
    Publishers: ["API_GATEWAY_SERVICE"],
    Method: "POST",
    Subscribers: [
      {
        Service: "TENANTS1_SERVICE",
        Function: "InsertChannel",
        OnSuccessTopicsToPush: ["TENANTS1_UPDATED"],
        OnFailureTopicsToPush: ["ERROR_RECEIVER"],
        QueueName: "TENANTS1_UPDATE-TENANTS1_SERVICE",
        QueueUrl:
          "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
        QueueArn:
          "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
        SubscriptionArn:
          "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
      },
    ],
    TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
  },
{  TopicName: "TENANTS1_DELETE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANTS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANTS1_DELETED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANTS1_DELETE-TENANTS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "TENANT_USERS1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USERS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USERS1_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USERS1_ADD-TENANT_USERS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "TENANT_USERS1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USERS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USERS1_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USERS1_UPDATE-TENANT_USERS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "TENANT_USERS1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "TENANT_USERS1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["TENANT_USERS1_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "TENANT_USERS1_DELETE-TENANT_USERS1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "TENANT_USER_APPS1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USER_APPS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USER_APPS1_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USER_APPS1_ADD-TENANT_USER_APPS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "TENANT_USER_APPS1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USER_APPS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USER_APPS1_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USER_APPS1_UPDATE-TENANT_USER_APPS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "TENANT_USER_APPS1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "TENANT_USER_APPS1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["TENANT_USER_APPS1_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "TENANT_USER_APPS1_DELETE-TENANT_USER_APPS1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "TENANT_USER_APP_ROLES1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USER_APP_ROLES1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USER_APP_ROLES1_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USER_APP_ROLES1_ADD-TENANT_USER_APP_ROLES1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "TENANT_USER_APP_ROLES1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USER_APP_ROLES1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USER_APP_ROLES1_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USER_APP_ROLES1_UPDATE-TENANT_USER_APP_ROLES1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "TENANT_USER_APP_ROLES1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "TENANT_USER_APP_ROLES1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["TENANT_USER_APP_ROLES1_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "TENANT_USER_APP_ROLES1_DELETE-TENANT_USER_APP_ROLES1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "TENANT_USER_APP_ALERTS1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USER_APP_ALERTS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USER_APP_ALERTS1_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USER_APP_ALERTS1_ADD-TENANT_USER_APP_ALERTS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "TENANT_USER_APP_ALERTS1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_USER_APP_ALERTS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_USER_APP_ALERTS1_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_USER_APP_ALERTS1_UPDATE-TENANT_USER_APP_ALERTS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "TENANT_USER_APP_ALERTS1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "TENANT_USER_APP_ALERTS1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["TENANT_USER_APP_ALERTS1_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "TENANT_USER_APP_ALERTS1_DELETE-TENANT_USER_APP_ALERTS1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "TENANT_APPS1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_APPS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_APPS1_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_APPS1_ADD-TENANT_APPS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "TENANT_APPS1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_APPS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_APPS1_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_APPS1_UPDATE-TENANT_APPS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "TENANT_APPS1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "TENANT_APPS1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["TENANT_APPS1_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "TENANT_APPS1_DELETE-TENANT_APPS1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "TENANT_APP_FEATURES1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_APP_FEATURES1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_APP_FEATURES1_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_APP_FEATURES1_ADD-TENANT_APP_FEATURES1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "TENANT_APP_FEATURES1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "TENANT_APP_FEATURES1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["TENANT_APP_FEATURES1_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "TENANT_APP_FEATURES1_UPDATE-TENANT_APP_FEATURES1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "TENANT_APP_FEATURES1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "TENANT_APP_FEATURES1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["TENANT_APP_FEATURES1_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "TENANT_APP_FEATURES1_DELETE-TENANT_APP_FEATURES1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "ROLES1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "ROLES1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["STUDENTS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "ROLES1_ADD-ROLES1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "ROLES1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "ROLES1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["STUDENTS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "ROLES1_UPDATE-ROLES1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "ROLES1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "ROLES1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["STUDENTS_ADDED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "ROLES1_DELETE-ROLES1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "FEATURES1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "FEATURES1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["FEATURES1_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "FEATURES1_ADD-FEATURES1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "FEATURES1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "FEATURES1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["FEATURES1_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "FEATURES1_UPDATE-FEATURES1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "FEATURES1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "FEATURES1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["FEATURES1_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "FEATURES1_DELETE-FEATURES1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "FEATURE_PERMISSIONS1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "FEATURE_PERMISSIONS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["FEATURE_PERMISSIONS1_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "FEATURE_PERMISSIONS1_ADD-FEATURE_PERMISSIONS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "FEATURE_PERMISSIONS1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "FEATURE_PERMISSIONS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["FEATURE_PERMISSIONS1_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "FEATURE_PERMISSIONS1_UPDATE-FEATURE_PERMISSIONS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "FEATURE_PERMISSIONS1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "FEATURE_PERMISSIONS1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["FEATURE_PERMISSIONS1_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "FEATURE_PERMISSIONS1_DELETE-FEATURE_PERMISSIONS1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "CLIENTS1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "CLIENTS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["CLIENTS1_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "CLIENTS1_ADD-CLIENTS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "CLIENTS1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "CLIENTS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["CLIENTS1_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "CLIENTS1_UPDATE-CLIENTS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "CLIENTS1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "CLIENTS1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["CLIENTS1_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "CLIENTS1_DELETE-CLIENTS1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "APPS1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APPS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["STUDENTS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APPS1_ADD-APPS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "APPS1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APPS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["STUDENTS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APPS1_UPDATE-APPS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "LOGIN_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APPS1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["STUDENTS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "LOGIN_ADD-APPS1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "APPS1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "APPS1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["APPS1_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "APPS1_DELETE-APPS1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "APP_ROLES1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APP_ROLES1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["STUDENTS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APP_ROLES1_ADD-APP_ROLES1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "APP_ROLES1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APP_ROLES1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["STUDENTS_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APP_ROLES1_UPDATE-APP_ROLES1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "APP_ROLES1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "APP_ROLES1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["STUDENTS_ADDED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "APP_ROLES1_DELETE-APP_ROLES1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{
  TopicName: "APP_MESSAGES1_ADD",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APP_MESSAGES1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["APP_MESSAGES1_ADDED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APP_MESSAGES1_ADD-APP_MESSAGES1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{TopicName: "APP_MESSAGES1_UPDATE",
  Publishers: ["API_GATEWAY_SERVICE"],
  Method: "POST",
  Subscribers: [
    {
      Service: "APP_MESSAGES1_SERVICE",
      Function: "InsertChannel",
      OnSuccessTopicsToPush: ["APP_MESSAGES1_UPDATED"],
      OnFailureTopicsToPush: ["ERROR_RECEIVER"],
      QueueName: "APP_MESSAGES1_UPDATE-APP_MESSAGES1_SERVICE",
      QueueUrl:
        "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
      QueueArn:
        "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
      SubscriptionArn:
        "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
    },
  ],
  TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
{  TopicName: "APP_MESSAGES1_DELETE",
Publishers: ["API_GATEWAY_SERVICE"],
Method: "POST",
Subscribers: [
  {
    Service: "APP_MESSAGES1_SERVICE",
    Function: "InsertChannel",
    OnSuccessTopicsToPush: ["APP_MESSAGES1_DELETED"],
    OnFailureTopicsToPush: ["ERROR_RECEIVER"],
    QueueName: "APP_MESSAGES1_DELETE-APP_MESSAGES1_SERVICE",
    QueueUrl:
      "https://sqs.us-west-2.amazonaws.com/938510084600/CHANNEL_ADD-CHANNEL_SERVICE",
    QueueArn:
      "arn:aws:sqs:us-west-2:938510084600:CHANNEL_ADD-CHANNEL_SERVICE",
    SubscriptionArn:
      "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD:93840f93-3401-4798-9a3b-5a2f63c0eb17",
  },
],
TopicArn: "arn:aws:sns:us-west-2:938510084600:CHANNEL_ADD",
},
  ],
};
