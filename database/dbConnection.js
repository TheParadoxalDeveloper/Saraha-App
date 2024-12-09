import { connect } from 'mongoose';

export const dbConnection = connect('mongodb+srv://paradoxaldev:paradox@paradoxal-activity.41jqk.mongodb.net/mvc_sarahaApp')
  .then(() => {
    console.log("Saraha Server Connected!");
  })
  .catch(() => {
    console.log("Error!! Saraha Server Not Connected!");
  });

