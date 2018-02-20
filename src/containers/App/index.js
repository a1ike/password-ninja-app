import React, { Component } from 'react';

import styled, { injectGlobal } from 'styled-components';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import Switch from 'material-ui/Switch';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

import Wrapper from '../../components/Wrapper';
import Title from '../../components/Title';
import Label from '../../components/Label';

import passwordNinja from 'password-ninja';


injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
  #root {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background: #eeeeee;
  }
  .h-p-15 {
    padding: 15px;
  }
  .h-m-b-20 {
    margin-bottom: 20px;
  }
  .h-m-b-40 {
    margin-bottom: 40px;
  }
  .h-text-right {
    text-align: right !important;
  }
  .default {
    cursor: default !important;
  }
  .h-w-100 {
    width: 100% !important;
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      length: 8,
      minAmountOfLowerChars: 1,
      minAmountOfUpperChars: 1,
      minAmountOfNums: 1,
      minAmountOfSymbs: 0,
      toLowerCase: false,
      toUpperCase: false
    }
  }

  generatePassword = () => {
    const { length, minAmountOfLowerChars, minAmountOfUpperChars, minAmountOfNums, minAmountOfSymbs, toLowerCase, toUpperCase } = this.state

    this.setState({
      result: passwordNinja(length, { minAmountOfLowerChars, minAmountOfUpperChars, minAmountOfNums, minAmountOfSymbs, toLowerCase, toUpperCase })
    });
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleNumberInputChange = (e) => {
    const target = e.target;
    const value = Number(target.value);
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { result, length, minAmountOfLowerChars, minAmountOfUpperChars,
      minAmountOfNums, minAmountOfSymbs, toLowerCase, toUpperCase } = this.state

    return (
      <Wrapper>

        <Typography variant="display3" gutterBottom={true} className="title">
          Password Ninja
        </Typography>

        <Grid container>
          <Grid item lg={12}>
            <Paper elevation={1} className="h-p-15 h-m-b-40">
              <Grid container spacing={15} alignItems="center">
                <Grid item lg={9}>
                  <Input
                    value={result}
                    onChange={this.handleInputChange}
                    name="result"
                    placeholder="Press the right button"
                    fullWidth
                  />
                </Grid>
                <Grid item lg={3}>
                  <Button onClick={this.generatePassword} variant="raised" color="primary">Generate Password</Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid container justify="space-between" spacing={16}>

          <Grid item lg={7}>
            <Typography variant="title" gutterBottom={true}>Options</Typography>
            <Paper elevation={20}>
              <List>

                <Grid item lg={12}>
                  <Paper elevation={0}>
                    <ListItem dense button className="default">
                      <Label>
                        <Grid container justify="space-between" alignItems="center" spacing={16}>
                          <Grid item lg={3}>
                            <Input type="number" value={length} name="length" onChange={this.handleNumberInputChange} />
                          </Grid>
                          <Grid item lg={9}>
                            <Typography variant="subheading">length</Typography>
                          </Grid>
                        </Grid>
                      </Label>
                    </ListItem>
                  </Paper>
                </Grid>

                <Grid item lg={12}>
                  <Paper elevation={0}>
                    <ListItem dense button className="default">
                      <Label>
                        <Grid container justify="space-between" alignItems="center" spacing={16}>
                          <Grid item lg={3}>
                            <Input type="number" value={minAmountOfLowerChars} name="minAmountOfLowerChars" onChange={this.handleNumberInputChange} />
                          </Grid>
                          <Grid item lg={9}>
                            <Typography variant="subheading">minAmountOfLowerChars</Typography>
                          </Grid>
                        </Grid>
                      </Label>
                    </ListItem>
                  </Paper>
                </Grid>

                <Grid item lg={12}>
                  <Paper elevation={0}>
                    <ListItem dense button className="default">
                      <Label>
                        <Grid container justify="space-between" alignItems="center" spacing={16}>
                          <Grid item lg={3}>
                            <Input type="number" value={minAmountOfUpperChars} name="minAmountOfUpperChars" onChange={this.handleNumberInputChange} />
                          </Grid>
                          <Grid item lg={9}>
                            <Typography variant="subheading">minAmountOfUpperChars</Typography>
                          </Grid>
                        </Grid>
                      </Label>
                    </ListItem>
                  </Paper>
                </Grid>

                <Grid item lg={12}>
                  <Paper elevation={0}>
                    <ListItem dense button className="default">
                      <Label>
                        <Grid container justify="space-between" alignItems="center" spacing={16}>
                          <Grid item lg={3}>
                            <Input type="number" value={minAmountOfNums} name="minAmountOfNums" onChange={this.handleNumberInputChange} />
                          </Grid>
                          <Grid item lg={9}>
                            <Typography variant="subheading">minAmountOfNums</Typography>
                          </Grid>
                        </Grid>
                      </Label>
                    </ListItem>
                  </Paper>
                </Grid>

                <Grid item lg={12}>
                  <Paper elevation={0}>
                    <ListItem dense button className="default">
                      <Label>
                        <Grid container justify="space-between" alignItems="center" spacing={16}>
                          <Grid item lg={3}>
                            <Input type="number" value={minAmountOfSymbs} name="minAmountOfSymbs" onChange={this.handleNumberInputChange} />
                          </Grid>
                          <Grid item lg={9}>
                            <Typography variant="subheading">minAmountOfSymbs</Typography>
                          </Grid>
                        </Grid>
                      </Label>
                    </ListItem>
                  </Paper>
                </Grid>

                <Grid item lg={12}>
                  <Paper elevation={0}>
                    <ListItem dense button className="default">
                      <Label>
                        <Grid container justify="space-between" alignItems="center" spacing={16}>
                          <Grid item lg={3}>
                            <Switch type="checkbox" label="To Lower Case Chars" onChange={this.handleInputChange} checked={toLowerCase} name="toLowerCase" color="primary" />
                          </Grid>
                          <Grid item lg={9}>
                            <Typography variant="subheading">toLowerCase</Typography>
                          </Grid>
                        </Grid>
                      </Label>
                    </ListItem>
                  </Paper>
                </Grid>

                <Grid item lg={12}>
                  <Paper elevation={0}>
                    <ListItem dense button className="default">
                      <Label>
                        <Grid container justify="space-between" alignItems="center" spacing={16}>
                          <Grid item lg={3}>
                            <Switch type="checkbox" label="To Upper Case Chars" onChange={this.handleInputChange} checked={toUpperCase} name="toUpperCase" color="primary" />
                          </Grid>
                          <Grid item lg={9}>
                            <Typography variant="subheading">toUpperCase</Typography>
                          </Grid>
                        </Grid>
                      </Label>
                    </ListItem>
                  </Paper>
                </Grid>

              </List>
            </Paper>
          </Grid>

          <Grid item lg={5}>
            <Typography variant="title" gutterBottom={true}>About</Typography>
            <Paper elevation={5}>
              Test
            </Paper>
          </Grid>

        </Grid>

      </Wrapper>
    );
  }
}

export default App;
