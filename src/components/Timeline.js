import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function TimelineComponent() {
  return (
    <Timeline className="timeline-component">
      <TimelineItem>
        <TimelineOppositeContent >
          January 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Revature | Full Stack Developer</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent >
          December 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Graduated University of Georgia | B.S in Computer Science</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent >
          August 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>UGA Directed Study | Researcher</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          June 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Zivaro | Cybersecurity Intern</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          February 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined"color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>KnowAthens | Web Developement Intern</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          February 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>UGA Hacks 8 | Full Stack Developer</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          January 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>University of Georgia | Computer Science major</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          August 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Georgia State University | Computer Science major</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
