import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ShoppingCart } from 'react-feather';
import StorybookWrapper from '../../common/storybookHelpers/StorybookWrapper';
import {
  Heading,
  Button,
  ButtonSize,
  Card,
  Grid,
  GridItem,
  Section,
  Image,
  Menu,
  MenuItem,
  theme,
} from '../../';
import { ButtonType } from '../../components/Button/Button';

const image = {
  width: 1200,
  height: 1200,
  aspectRatio: 100,
  sizes: [
    {
      url: 'https://dummyimage.com/1200x1200/fff/aaa',
      width: 1200,
      height: 1200,
    },
  ],
};

const logo = {
  width: 640,
  height: 360,
  aspectRatio: 1,
  sizes: [
    {
      url: 'https://dummyimage.com/640x360/fff/aaa',
      width: 640,
      height: 360,
    },
  ],
};

const footer = (
  <>
    <Heading as="h2">Title of the card</Heading>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.small,
      }}
    >
      20$
      <Button size={ButtonSize.SMALL} icon={<ShoppingCart />}>
        Click me
      </Button>
    </div>
  </>
);

const content = (
  <>
    <Button
      size={ButtonSize.SMALL}
      type={ButtonType.FLAT}
      icon={<ShoppingCart />}
    >
      Click me
    </Button>
  </>
);

const stories = storiesOf('Product listing', module);

stories.add('Default', () => (
  <StorybookWrapper style={{ margin: 0 }}>
    <Grid
      gridTemplateAreas="'sidebar content'"
      gridTemplateColumns="16rem 1fr"
      gridGap="0"
    >
      <GridItem
        area="sidebar"
        style={{
          padding: theme.spacing.large,
          paddingRight: theme.spacing.huge,
          // backgroundColor: '#E6EDF3',
        }}
      >
        <Image image={logo} />

        <Heading as="h2">Menu</Heading>

        <Section>
          <Menu>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
            <MenuItem>{content}</MenuItem>
          </Menu>
        </Section>
      </GridItem>

      <GridItem
        area="content"
        style={{
          padding: theme.spacing.large,
          paddingLeft: theme.spacing.huge,
        }}
      >
        <div>
          <Heading as="h2">Product list</Heading>

          <Grid
            as="ul"
            gridTemplateColumns="repeat(auto-fill, minmax(14rem, 1fr))"
            gridGap="64px"
          >
            {[...Array(16)].map((item, index) => (
              <GridItem as="li" key={index}>
                <Card content={footer}>
                  <Image image={image} />
                </Card>
              </GridItem>
            ))}
          </Grid>
        </div>
      </GridItem>
    </Grid>
  </StorybookWrapper>
));
