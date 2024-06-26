import React from "react";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import './MainContainer.css'

export default function CreateFeed() {
    return(
        <div className="create-feed-container">
            <div className="avatar-input">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                    >
                    <TextField className="input-field" id="outlined-textarea" fullWidth label="What’s happening" multiline />
                </Box>
            </div>
            <div className="media-post">
                <div className="media">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path id="Vector" d="M17.75 0H2.25C1.01 0 0 1.01 0 2.25V17.75C0 18.99 1.01 20 2.25 20H17.75C18.99 20 20 18.99 20 17.75V2.25C20 1.01 18.99 0 17.75 0ZM2.25 1.5H17.75C18.163 1.5 18.5 1.837 18.5 2.25V11.926L14.642 8.068C14.502 7.928 14.312 7.848 14.112 7.848H14.109C13.909 7.848 13.716 7.928 13.577 8.072L9.26 12.456L7.447 10.65C7.307 10.51 7.117 10.43 6.917 10.43C6.724 10.4 6.522 10.51 6.382 10.657L1.5 15.642V2.25C1.5 1.837 1.837 1.5 2.25 1.5ZM1.506 17.78L6.924 12.246L13.206 18.5H2.25C1.848 18.5 1.523 18.178 1.506 17.78ZM17.75 18.5H15.33L10.323 13.513L14.115 9.663L18.5 14.047V17.75C18.5 18.163 18.163 18.5 17.75 18.5Z" fill="#242424"/>
                        <path id="Vector_2" d="M6.86817 7.85109C7.71979 7.85109 8.41017 7.16071 8.41017 6.30909C8.41017 5.45747 7.71979 4.76709 6.86817 4.76709C6.01655 4.76709 5.32617 5.45747 5.32617 6.30909C5.32617 7.16071 6.01655 7.85109 6.86817 7.85109Z" fill="#242424"/>
                        </g>
                    </svg>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path id="Vector" d="M18.0004 8.50005V6.80005H13.6004V13.2H15.3004V11.2H17.3004V9.50005H15.3004V8.50005H18.0004ZM10.7004 6.80005H12.4004V13.2H10.7004V6.80005ZM7.10039 8.40005C7.50039 8.40005 8.00039 8.60005 8.30039 8.90005L9.50039 7.90005C8.90039 7.20005 8.00039 6.80005 7.10039 6.80005C5.30039 6.80005 3.90039 8.20005 3.90039 10C3.90039 11.8 5.30039 13.2 7.10039 13.2C8.10039 13.2 8.90039 12.8 9.50039 12.1V9.60005H6.70039V10.8H7.90039V11.4C7.70039 11.5 7.40039 11.6 7.10039 11.6C6.20039 11.6 5.50039 10.9 5.50039 10C5.50039 9.20005 6.20039 8.40005 7.10039 8.40005Z" fill="#242424"/>
                        <path id="Vector_2" d="M19.5 0.0200195H2.5C1.26 0.0200195 0.25 1.02702 0.25 2.26702V17.774C0.25 19.012 1.26 20.02 2.5 20.02H19.5C20.74 20.02 21.75 19.012 21.75 17.774V2.26702C21.75 1.02702 20.74 0.0200195 19.5 0.0200195ZM20.25 17.774C20.25 18.184 19.914 18.52 19.5 18.52H2.5C2.086 18.52 1.75 18.184 1.75 17.774V2.26702C1.75 1.85502 2.086 1.52002 2.5 1.52002H19.5C19.914 1.52002 20.25 1.85502 20.25 2.26702V17.774Z" fill="#242424"/>
                        </g>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path id="Vector" d="M18.222 7.15991H16.888C16.903 7.06991 16.916 6.97791 16.916 6.88291V4.56991C16.916 3.58991 16.119 2.79291 15.138 2.79291H1.5V1.35791C1.5 0.94391 1.164 0.60791 0.75 0.60791C0.336 0.60791 0 0.94391 0 1.35791V18.8299C0 19.2449 0.336 19.5799 0.75 19.5799C1.164 19.5799 1.5 19.2449 1.5 18.8299V17.3959H12.056C13.036 17.3959 13.834 16.5989 13.834 15.6189V13.3059C13.834 13.2109 13.82 13.1189 13.806 13.0279H18.223C19.203 13.0279 20.001 12.2299 20.001 11.2499V8.93991C20.001 7.95691 19.204 7.15991 18.223 7.15991H18.222ZM15.14 4.29291C15.292 4.29291 15.417 4.41691 15.417 4.56991V6.87991C15.417 7.03391 15.292 7.15991 15.139 7.15991H1.5V4.28991H15.14V4.29291ZM12.333 13.3069V15.6189C12.333 15.7719 12.208 15.8959 12.055 15.8959H1.5V13.0279H12.056C12.209 13.0279 12.333 13.1539 12.333 13.3079V13.3069ZM18.5 11.2499C18.5 11.4029 18.375 11.5269 18.222 11.5269H1.5V8.65991H18.222C18.375 8.65991 18.5 8.78391 18.5 8.93691V11.2499Z" fill="#242424"/>
                        </g>
                    </svg>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group">
                        <path id="Vector" d="M11 21.75C5.072 21.75 0.25 16.928 0.25 11C0.25 5.072 5.072 0.25 11 0.25C16.928 0.25 21.75 5.072 21.75 11C21.75 16.928 16.928 21.75 11 21.75ZM11 1.75C5.9 1.75 1.75 5.9 1.75 11C1.75 16.1 5.9 20.25 11 20.25C16.1 20.25 20.25 16.1 20.25 11C20.25 5.9 16.1 1.75 11 1.75Z" fill="#242424"/>
                        <path id="Vector_2" d="M10.9998 16.1151C9.10776 16.1151 7.36676 15.1651 6.34376 13.5711C6.11976 13.2231 6.22076 12.7611 6.56976 12.5361C6.91776 12.3101 7.38176 12.4121 7.60576 12.7621C8.35276 13.9241 9.62176 14.6171 11.0008 14.6171C12.3798 14.6171 13.6488 13.9241 14.3968 12.7631C14.6208 12.4131 15.0848 12.3131 15.4328 12.5381C15.7828 12.7621 15.8828 13.2261 15.6588 13.5741C14.6338 15.1681 12.8928 16.1191 11.0008 16.1191L10.9998 16.1151Z" fill="#242424"/>
                        <path id="Vector_3" d="M13.7378 9.93598C14.554 9.93598 15.2158 9.27426 15.2158 8.45798C15.2158 7.6417 14.554 6.97998 13.7378 6.97998C12.9215 6.97998 12.2598 7.6417 12.2598 8.45798C12.2598 9.27426 12.9215 9.93598 13.7378 9.93598Z" fill="#242424"/>
                        <path id="Vector_4" d="M8.26218 9.93598C9.07846 9.93598 9.74018 9.27426 9.74018 8.45798C9.74018 7.6417 9.07846 6.97998 8.26218 6.97998C7.4459 6.97998 6.78418 7.6417 6.78418 8.45798C6.78418 9.27426 7.4459 9.93598 8.26218 9.93598Z" fill="#242424"/>
                        </g>
                    </svg>
                </div>
                <div className="post-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle opacity="0.3" cx="12" cy="12" r="11" stroke="#4F4F4F" stroke-width="2"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                    <circle opacity="0.5" cx="13.5" cy="13.5" r="13.5" fill="#F1C644"/>
                    <path d="M18.7588 13.3232V12.8232H18.2588H14.6489V9V8.5H14.1489H13.0264H12.5264V9V12.8232H9H8.5V13.3232V14.3623V14.8623H9H12.5264V18.834V19.334H13.0264H14.1489H14.6489V18.834V14.8623H18.2588H18.7588V14.3623V13.3232Z" fill="white" stroke="white"/>
                    </svg>
                    <Button className="btn-primary" variant="contained">Post</Button>
                </div>
            </div>
        </div>
    )
}