import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import TextTypography from "../../atoms/typography";
import SecondarySelectedTab from "../../molecules/SecondarySelectedTabs";
import Search from "../Search";

interface HeaderProps {
  logo?: React.ReactNode;
  searchIcon?: React.ReactNode;
  link1?: React.ReactNode;
  link2?: React.ReactNode;
  dropdown1?: React.ReactNode;
  dropdown2?: React.ReactNode;
  style?: React.CSSProperties;
};

const Header = (props: HeaderProps) => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  const [openExplore, setOpenExplore] = React.useState<boolean>(false);

  const handleHome = () => {
    navigate("/");
  };

  const goToRequiredRoute = () => {
    // some code here
    navigate("/some-end-point");
  };

  const handleExplore = () => {
    openExplore ? setOpenExplore(false) : setOpenExplore(true);
    // show the explore dropdown....
  };

  const handleSearch = () => {
    showSearch ? setShowSearch(false) : setShowSearch(true);
    // show and hide the search bar based on the search click...
  };
  return (
    <div>
      <Grid
        container
        style={props.style}
        sx={{
          position: "sticky",
          top: 0,
        }}
      >
        <Grid item onClick={handleHome}>
          {props.logo}
        </Grid>
        <Grid item onClick={handleSearch}>
          {props.searchIcon}
        </Grid>
        {showSearch ? (
          <Grid container>
            <Search />
          </Grid>
        ) : (
          <>
            <Grid item onClick={handleExplore}>
              {props.dropdown1}
            </Grid>
            {openExplore ? (
              <SecondarySelectedTab
                firstTab={
                  <TextTypography variant="subtitle1">
                    Explore by category
                  </TextTypography>
                }
                secondTab={
                  <TextTypography variant="subtitle1">
                    Explore by category
                  </TextTypography>
                }
                thirdTab={
                  <TextTypography variant="subtitle1">
                    Explore by category
                  </TextTypography>
                }
              />
            ) : null}
            <Grid item onClick={goToRequiredRoute}>
              {props.link1}
            </Grid>
            <Grid item onClick={goToRequiredRoute}>
              {props.link2}
            </Grid>
          </>
        )}
        <Grid item onClick={handleExplore}>
          {props.dropdown2}
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
