import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
  title: String,
  description: String,
  repoUrl: String,
  demoUrl: String,
});

export default model('Project', projectSchema);
