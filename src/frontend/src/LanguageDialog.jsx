import React, { useState } from 'react'
import { Dialog, Text } from '@fluentui/react-northstar';
import LanguageDropdown, { languages } from './LanguageDropdown'


export default function LanguageDialog(props) {

    const [selectedSourceLanguage, setSelectedSourceLanguage] = useState(null)
    const [selectedTargetLanguage, setSelectedTargetLanguage] = useState(null)

    const onDialogSave = (event) => {
        console.log(event)
        const newOption = props.currentOption
        newOption.serviceSpecificConfig = { to : selectedSourceLanguage, from : selectedTargetLanguage }
        props.setHideDialog(true)
        props.addItemToPipeline(newOption)
    }

    const onDialogCancel = () => {
        props.setHideDialog(true)
    }

    const onTranslateSourceDialogChange = (event, dropObject) => {
        setSelectedSourceLanguage(languages[dropObject.highlightedIndex].key)
    }
    
    const onTranslateTargetDialogChange = (event, dropObject) => {
        setSelectedTargetLanguage(languages[dropObject.highlightedIndex].key)
    }

    return (
        <Dialog
            header="Language Translation"
            content={
                <>
                    <div style={{
                            display: 'block', marginBottom: "10px"
                        }}>
                        <Text content="Source Language" style={{
                            display: 'block', marginBottom: "10px"
                        }} />
                        <LanguageDropdown
                            onDialogChange={onTranslateSourceDialogChange}
                        />
                    </div>
                   
                    <div style={{
                            display: 'block', marginBottom: "10px"
                        }}>
                        <Text content="Target Language" style={{
                            display: 'block', marginBottom: "10px"
                        }} />
                        <LanguageDropdown
                            onDialogChange={onTranslateTargetDialogChange}
                        />
                    </div>
                </>}
            open={!props.hideDialog}
            cancelButton="Cancel"
            confirmButton="Submit"
            onConfirm={onDialogSave}
            onCancel={onDialogCancel}
            style={{ overflow: "visible" }}
        />
    )
} 