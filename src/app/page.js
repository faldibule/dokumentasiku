"use client"
import PageHeader from "@/components/PageHeader";
import CardSection from "@/components/landing-page/CardSection";
import ComunitySection from "@/components/landing-page/ComunitySection";
import FooterSection from "@/components/landing-page/FooterSection";
import HeroSection from "@/components/landing-page/HeroSection";
import NavbarLandingPage from "@/layout/dashboard/NavbarLandingPage";
import styled from "@emotion/styled";
import { CssBaseline, Divider } from "@mui/material";

const RootStyle = styled('div')({
    backgroundColor: '#141a1f',
    overflowX: 'hidden',
});

const Home = () => {
    return (
        <PageHeader title="Landing Page">
            <RootStyle>
              <CssBaseline />
              <NavbarLandingPage />
              <HeroSection />
              <CardSection />
              <ComunitySection />
              <Divider />
              <FooterSection />
            </RootStyle>
        </PageHeader>
        
    );
}
export default Home
