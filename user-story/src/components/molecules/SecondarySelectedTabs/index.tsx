import { Tabs, Tab, Grid } from '@mui/material'
import React from 'react'
import TextTypography from '../../atoms/typography';
import TabPanel from '@mui/lab/TabPanel';

interface SecondarySelectedTabProps {
    style?: React.CSSProperties;
    firstTab: React.ReactNode;
    secondTab: React.ReactNode;
    thirdTab: React.ReactNode;
    content?: React.ReactNode[];
}

const SecondarySelectedTab = (props: SecondarySelectedTabProps) => {
    const [value, setValue] = React.useState<string>("one");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }
  return (
    <div>
        <Tabs
           style={props.style}
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
        >
            <Tab value="one" label={ <TextTypography variant='subtitle1'>{props.firstTab}</TextTypography> } />
            <Tab value="two" label={ <TextTypography variant='subtitle1'>{props.secondTab}</TextTypography> } />
            <Tab value="three" label={ <TextTypography variant='subtitle1'>{props.thirdTab}</TextTypography> } />

            <Grid container direction="column">
              <TabPanel style={props.style} value="one">{props.content[0]}</TabPanel>
              <TabPanel style={props.style} value="two">{props.content[1]}</TabPanel>
              <TabPanel style={props.style} value="three">{props.content[2]}</TabPanel>
            </Grid>
        </Tabs>
    </div>
  )
}

export default SecondarySelectedTab