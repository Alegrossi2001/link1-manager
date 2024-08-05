import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export interface AppBarProps {
  currentProject: string | null;
  onGoBack: () => void;
  onAddNewProject: (projectName: string) => void;
}

const ProjectAppBar: React.FC<AppBarProps> = ({ currentProject, onGoBack, onAddNewProject }) => {
    const [open, setOpen] = useState(false);
    const [newProjectName, setNewProjectName] = useState('');
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
      setNewProjectName('');
    };
  
    const handleAddProject = () => {
      onAddNewProject(newProjectName);
      handleClose();
    };
  
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="go back"
              onClick={onGoBack}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {currentProject ? currentProject : "None"}
            </Typography>
            <Button color="inherit" onClick={handleOpen}>
              Add Project
            </Button>
          </Toolbar>
        </AppBar>
  
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Project</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Project Name"
              type="text"
              fullWidth
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAddProject} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  
  export default ProjectAppBar;