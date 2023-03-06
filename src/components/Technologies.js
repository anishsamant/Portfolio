import {React, useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import GradeSharpIcon from '@mui/icons-material/GradeSharp';
import { styled } from '@mui/material/styles';

import '../stylesheets/technologies.css';


function Technologies() {

    const [showRating, setShowRating] = useState(false);
    const [rating, setRating] = useState(0);
    const [techStack, setTechStack] = useState("");

    const handleMouseEnter = (event) => {
        setShowRating(true);
        let rat = 0;
        let tech = event.target.id;
        switch(tech) {
            case 'javascript': rat = 5; break;
            case 'solidity': rat = 4.5; break;
            case 'cpp': rat = 4; break;
            case 'java': rat = 4; break;
            case 'python': rat = 4; break;
            case 'react': rat = 4; break;
            case 'lwc': rat = 4; tech = 'lightning web components'; break;
            case 'salesforce': rat = 4.5; break;
            case 'blockchain': rat = 4.5; break;
            case 'git': rat = 4; break;
            default: break;
        }
        setRating(rat);
        setTechStack(tech.toUpperCase())
    }

    const handleMouseLeave = () => {
        setShowRating(false);
        setRating(0);
        setTechStack("");
    }

    const skills = ['javascript', 'solidity', 'cpp', 'java', 'python', 'react', 'lwc', 'salesforce', 'blockchain', 'git', 'aws', 'databases'];
    const items = [];

    for (const [index, value] of skills.entries()) {
        const url = `/assets/technologies/${value}.png`
        items.push(
            <span key={index} style={{'--i': index}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={url} id={value} alt={value} />
            </span>
        )
    }

    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#F4BD05',
        },
        '& .MuiRating-iconEmpty': {
          color: '#BCBBBA',
        },
      });

    return (
        <div className='parent position-relative' id="technologies">
            <div className='position-absolute top-0 start-0 end-0 text-center mt-4'>
                <span className="technologies-heading">TECHNOLOGIES</span>
                {showRating && <div className='position-relative top-0 start-0 end-0 text-center mt-1'>
                    <Typography component="legend" variant="h5" className="tech-name">{techStack}</Typography>
                    <StyledRating 
                        className="rating-style"
                        name="tech-rating" 
                        size="large"
                        value={rating} 
                        readOnly 
                        precision={0.5}
                        icon={<GradeSharpIcon fontSize="inherit" />}
                        emptyIcon={<GradeSharpIcon fontSize="inherit" />}
                    />
                </div>}
            </div>
            <br/>
            <div className='gallery'>
                {items}
            </div>
        </div>
    )
}

export default Technologies
