import React from "react";
import {Link} from "react-router-dom";
import {ListItem, ListItemIcon, ListItemText, ListSubheader} from "@mui/material";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import TvIcon from '@mui/icons-material/Tv';
import WeekendIcon from '@mui/icons-material/Weekend';

export const ManagerListItems = () => {
    return (
        <div>
            <ListSubheader inset>Manager panel</ListSubheader>
            <ListItem style={{
                color: 'inherit',
                textDecoration: 'none',
            }}
                      component={Link} to={`movie-management`}>
                <ListItemIcon>
                    <MovieCreationIcon/>
                </ListItemIcon>
                <ListItemText primary="Movie management"/>
            </ListItem>

            <ListItem style={{
                color: 'inherit',
                textDecoration: 'none',
            }}
                      component={Link} to={`cinema-management`}>
                <ListItemIcon>
                    <TvIcon/>
                </ListItemIcon>
                <ListItemText primary="Cinema management"/>
            </ListItem>

            <ListItem style={{
                color: 'inherit',
                textDecoration: 'none',
            }}
                      component={Link} to={`hall-management`}>
                <ListItemIcon>
                    <WeekendIcon/>
                </ListItemIcon>
                <ListItemText primary="Hall management"/>
            </ListItem>

            <ListItem style={{
                color: 'inherit',
                textDecoration: 'none',
            }}
                      component={Link} to={`additional-service-management`}>
                <ListItemIcon>
                    <FastfoodIcon/>
                </ListItemIcon>
                <ListItemText primary="Additional service management"/>
            </ListItem>
        </div>
    )
};