import { useState, useEffect } from 'react';
import axios from 'axios';

interface Project {
  _id?: string;
  title: string;
  description: string;
  repoUrl: string;
  demoUrl: string;
}

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    axios.get('/api/portfolio/projects').then(res => setProjects(res.data));
  }, []);

  return (
    <div>
      <h2>Admin</h2>
      <ul>
        {projects.map(p => (
          <li key={p._id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}
