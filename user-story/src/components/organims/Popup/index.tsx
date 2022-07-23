import { Grid, TextField } from '@mui/material'
import React from 'react'
import Buttons from '../../atoms/buttons';
import Icon from '../../atoms/icons';
import TextTypography from '../../atoms/typography/index';

type PopupProps = {
    style?: React.CSSProperties;
}

const Popup = (props: PopupProps) => {
    const [isEmailAdded ,setEmailAdded] = React.useState<boolean>(false);

    const handleEmail = () => {
        setEmailAdded(true);
    };

    const handleNeed = () => {

    };
  return (
    <div>
        <Grid container direction={"column"}
         style={props.style}
        >
            { isEmailAdded ?
              <Grid container direction={"column"}>
                <Icon src={"somepath.png"}>{}</Icon>
                <TextTypography variant='h2'>{}</TextTypography>
                <TextTypography variant='h4'>{}</TextTypography>
              </Grid> :
              <Grid>
              <Grid item>
                  <TextTypography variant='h2'>{}</TextTypography>
              </Grid>
              <Grid item>
                  <TextTypography variant='h2'>{}</TextTypography>
              </Grid>
              <Grid item>
                  <Grid>
                      <TextTypography variant='h2'>{}</TextTypography>
                      <TextTypography variant='h2'>{}</TextTypography>
                  </Grid>
              </Grid>
              <Grid item>
                  <Grid>
                      <TextTypography variant='h2'>{}</TextTypography>
                      <TextField />
                  </Grid>
              </Grid>
              <Grid item>
                  <Buttons variant='contained' onClick={handleEmail}>Add Email</Buttons>
                  <Buttons variant="outlined" onClick={handleNeed}>Need help?</Buttons>
              </Grid>
          </Grid>
             }

        </Grid>
    </div>
  )
}

export default Popup