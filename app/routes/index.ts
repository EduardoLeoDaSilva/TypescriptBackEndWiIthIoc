import authRoutes from './authRoutes.js';
import personRoutes from './personRoutes.js';
import express,{ Express } from 'express';


const routes = (app: Express) => {
    app.use(express.json());

    app.use('/api/person', personRoutes);
    app.use('/api/auth', authRoutes);
}

export default routes;