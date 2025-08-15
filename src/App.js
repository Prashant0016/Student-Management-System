import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Container, Button, Box } from '@mui/material';
import Dashboard from './components/Dashboard';
import StudentsList from './components/StudentsList';
import AddStudentForm from './components/AddStudentForm';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [addStudentDialogOpen, setAddStudentDialogOpen] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      const transformedStudents = response.data.users.map((user, index) => ({
        id: index + 1,
        name: `${user.firstName} ${user.lastName}`,
        course: 'Computer Science', 
        status: 'active',
      }));
      setStudents(transformedStudents);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleAddStudent = (student) => {
    setStudents(prev => [
      ...prev,
      {
        id: prev.length + 1,
        ...student,
      }
    ]);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, mb: 4 }}>
          <Dashboard studentCount={students.length} />
          
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setAddStudentDialogOpen(true)}
            >
              Add Student
            </Button>
          </Box>

          <StudentsList
            students={students}
            searchQuery={searchQuery}
            onSearchChange={(e) => setSearchQuery(e.target.value)}
          />

          <AddStudentForm
            open={addStudentDialogOpen}
            onClose={() => setAddStudentDialogOpen(false)}
            onSave={handleAddStudent}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
