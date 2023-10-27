import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function CustomCard({ imageUrl, authorName, authorDesignation, description }) {
  return (
    <Card style={{ height: "100%", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <CardHeader
        avatar={<Avatar src={imageUrl} alt="Avatar" sx={{ width: 60, height: 60 }} />}
        title={<Typography variant="h6" color="black">{authorName}</Typography>}
        subheader={<Typography variant="body2" color="textPrimary">{authorDesignation}</Typography>}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" style={{ maxHeight: "100px", overflow: "hidden", color: "black", fontSize: "1rem" }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
