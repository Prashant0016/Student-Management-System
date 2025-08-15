import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  Button, 
  TextField, 
  Box 
} from '@mui/material';

const AddStudentForm = ({ open, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    status: 'active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
    setFormData({ name: '', course: '', status: 'active' });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Student</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            />
            <TextField
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddStudentForm;
