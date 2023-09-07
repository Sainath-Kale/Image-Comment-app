import React, {Component, useState} from 'react'
import {
    AppContainer,
    MemeGeneratorContainer,
    Heading,
    FormAndMemeContainer,
    MemeContainer,
    MemeGeneratorForm,
    CustomLabel,
    CustomInput,
    GenerateButton,
  } from './styledComponent'

class ImageUpload extends Component{
    state = {
        backgroundImageUrlInput: '',
        backgroundImageUrl: '',
    
      }

      onChangeBackgroundImage = event => {
        this.setState({backgroundImageUrlInput: event.target.value})
      }

      onGenerateMeme = event => {
        event.preventDefault()
    
        const {
          backgroundImageUrlInput,

        } = this.state
    
        this.setState({
          backgroundImageUrl: backgroundImageUrlInput,
        })
      }
    
      renderMemeGeneratorForm = () => {
        const {
          backgroundImageUrlInput,
        } = this.state
    
        return (
          <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
            <CustomLabel htmlFor="backgroundImageUrl">Image Url</CustomLabel>
            <CustomInput
              type="text"
              id="backgroundImageUrl"
              value={backgroundImageUrlInput}
              onChange={this.onChangeBackgroundImage}
              placeHolder="Enter the Image URL"
            />
    
            
            <GenerateButton type="submit">Generate</GenerateButton>
          </MemeGeneratorForm>
        )
      }
    
      renderMeme = () => {
        const {
          backgroundImageUrl,

        } = this.state
    
        return (
          <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>

        
          </MemeContainer>
        )
      }
    
      render() {
        return (
          <AppContainer>
            <MemeGeneratorContainer>
              <Heading>Photo Generator</Heading>
              <FormAndMemeContainer>
                {this.renderMeme()}
                {this.renderMemeGeneratorForm()}
              </FormAndMemeContainer>
            </MemeGeneratorContainer>
          </AppContainer>
        )
      }
    }



export default ImageUpload;
