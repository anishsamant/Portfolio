import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardFooter, 
    MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import '../stylesheets/projects.css';


function Projects() {
    const baseGithubUrl = 'https://github.com/anishsamant/';
    const projects = [
        {
            name: 'Liquidator Bots',
            description: [
                'Developed liquidator bots for the compound finance and mango markets using solidity. ',
                'Implemented flashswap and flashbot integration to ensure maximum possible profitability from the trade.'
            ],
            thumbnail: 'liquidator',
            link: null,
            type: 'professional' 
        },
        {
            name: 'Program Scheduler',
            description: [
                'A highly customizable, UI and data intensive media program scheduler developed using LWC and Apex on the salesforce platform. ',
                'Implemented techniques like lazy loading and structured component rendering to ensure seemless display of data and lag free user experience.'
            ],
            thumbnail: 'program-scheduler',
            link: null,
            type: 'professional' 
        },
        {
            name: 'NFT Marketplace',
            description: [
                'An NFT marketplace implementing the ERC721 and ERC165 standards from scratch utilizing the amazon managed blockchain and various other aws services along with a react UI for the user to interact with the smart contract.',
                'Recognizes and connects to browser injected web3 wallets such as metamask.'
            ],
            thumbnail: 'nft-marketplace',
            link: 'NFTMarketplace',
            type: 'open-source' 
        },
        {
            name: 'Blockchain Based Crowdfunding',
            description: [
                'A Blockchain based crowdfunding website for creating campaigns, contributing to campaigns and submitting eth withdrawal requests, with a react UI for the user to interact with the smart contract.',
                'Ensures complete transparency with increased security and efficiency, allowing the funding to be generated from a global audience.'
            ],
            thumbnail: 'crowdfunding',
            link: 'BlockchainKickstarterApp',
            type: 'open-source' 
        },
        {
            name: 'Master Data Management',
            description: [
                'A master data management system developed in salesforce with mulesoft integration to collect data from multiple sources and have a single source of truth. ',
                'The project involved automating the migration of data from multiple sources to salesforce via mulesoft and creating the necessary objects and workflows in salesforce to ensure data integrity and maintain complete data history.'
            ],
            thumbnail: 'mdm',
            link: null,
            type: 'professional' 
        },
        {
            name: 'Photo Filter App',
            description: [
                'An android application that applies 4 basic filters (brightness, saturation, contrast and vignette) on any selected image and stores the filtered images in localstorage.',
            ],
            thumbnail: 'photo-filter',
            link: 'Photo-Filter-App',
            type: 'open-source' 
        },
    ]
    
    const items = [];
    projects.forEach((project, index) => {
        let tasks = [];
        project.description.forEach((task, index) => {
            tasks.push(
                <li className='li-style' key={index}>{task}</li>
            )
        })
        const url = `/assets/projects/${project.thumbnail}.jpg`;
        const projectLink = `${baseGithubUrl}${project.link}`;
        const displayText = project.link? 
            'Go to Project' : project.type === 'professional' ?
                'Confidential': 'Coming Soon';
        let htmlToDisplay;
        if (displayText === 'Go to Project') {
            htmlToDisplay = <a href={projectLink} className="projects-links">{displayText}</a>;
        } else {
            htmlToDisplay = <small className='text-muted'>{displayText}</small>;
        }
        items.push(
            <MDBCol key={project.thumbnail} className="p-3">
                <MDBCard className='card-style h-100'>
                    <MDBCardImage 
                        className="img-style"
                        src={url}
                        alt={project.name}
                        position='top'
                        
                    />
                    <MDBCardBody>
                        <MDBCardTitle className="projects-card-title">{project.name}</MDBCardTitle>
                        <MDBCardText className="projects-card-text">
                            <ul>
                                {tasks}
                            </ul>
                        </MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className="projects-card-footer">
                        {htmlToDisplay}
                    </MDBCardFooter>
                </MDBCard>
            </MDBCol>
        )
    });

    return (
        <div className="text-center mt-3" id="projects">
            <span className="projects-heading">PROJECTS</span>
            <div className="projects-container-style row">
                <MDBRow className='row-style row-cols-1 row-cols-md-2 row-cols-lg-3'>
                    {items}
                </MDBRow>
            </div>
        </div>
    );
}

export default Projects;