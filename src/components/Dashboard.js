import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const Dashboard = ({ studentCount }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Student Management System
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Total Students
              </Typography>
              <Typography variant="h3">
                {studentCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
