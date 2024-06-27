import React from "react";
import { FaMeta } from "react-icons/fa6";
import { Box,
    FooterContainer,
  	Row,
  	Column,
  	FooterLink,
  	Heading, } from "./FooterStyles";
const Footer = () => {
	return (
		<Box>
		
			<FooterContainer>
        <Row>
          <Column>
          <div><h3><FaMeta size={22} height={"16px"} /> Meta Open Source @md_2024</h3></div>
          
          </Column>
        </Row>
      
				<Row>
					<Column>
						<Heading>Learn React</Heading>
						<FooterLink href="#">
							JSX
						</FooterLink>
						<FooterLink href="#">
							Hooks
						</FooterLink>
						<FooterLink href="#">
							Router
						</FooterLink>
					</Column>
					<Column>
						<Heading> API Reference</Heading>
						<FooterLink href="#">
							React API
						</FooterLink>
						<FooterLink href="#">
							React Dom API
						</FooterLink>
						
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							Uttar Pradesh
						</FooterLink>
						<FooterLink href="#">
							Ahemdabad
						</FooterLink>
						<FooterLink href="#">
							Indore
						</FooterLink>
						<FooterLink href="#">
							Mumbai
						</FooterLink>
					</Column>
					<Column>
						<Heading>More</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									React
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Blogs
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Privacy
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Terms
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;