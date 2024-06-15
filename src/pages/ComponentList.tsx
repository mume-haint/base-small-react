import Typography from "@mui/material/Typography";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Rating} from "@mui/material";
import Card from "@mui/material/Card";
import React, {useState} from "react";
import AutocompleteEx from "src/components/component-page/AutocompleteEx.tsx";
import ButtonEx from "src/components/component-page/ButtonEx.tsx";
import ButtonGroupEx from "src/components/component-page/ButtonGroupEx.tsx";
import CheckboxEx from "src/components/component-page/CheckboxEx.tsx";
import FloatingActionButtonEx from "src/components/component-page/FloatingActionButtonEx.tsx";
import RadioGroupEx from "src/components/component-page/RadioGroupEx.tsx";
import RatingEx from "src/components/component-page/RatingEx.tsx";
import SelectEx from "src/components/component-page/SelectEx.tsx";
import SliderEx from "src/components/component-page/SliderEx.tsx";
import SwitchEx from "src/components/component-page/SwitchEx.tsx";
import TextFieldEx from "src/components/component-page/TextFieldEx.tsx";
import TransferListEx from "src/components/component-page/TransferListEx.tsx";
import ToggleButtonEx from "src/components/component-page/ToggleButtonEx.tsx";

function SelectExz() {
    return null;
}

export default function ComponentList() {
    const [ratingValue, setRatingValue] = useState<number | null>(2);
    return (
        <>
            <Card className="p-3 m-3">
                <Typography>Auto complete</Typography>
                <AutocompleteEx/>
            </Card>
            <Card className="p-3 m-3">
                <Typography>Button</Typography>
                <ButtonEx/>
            </Card>
            <Card className="p-3 m-3">
                <Typography>Button group</Typography>
                <ButtonGroupEx/>
            </Card>
            <Card className="p-3 m-3">
                <Typography>Checkbox</Typography>
                <CheckboxEx/>
            </Card>
            <Card className="p-3 m-3">
                <Typography>Floating action button</Typography>
                <FloatingActionButtonEx/>
            </Card>
            <Card className="p-3 m-3">
                <Typography>Radio group</Typography>
                <RadioGroupEx/>
            </Card>
            <Card className="p-3 m-3">
                <Typography>Rating</Typography>
                <RatingEx/>
            </Card>
            <Card className="p-3 m-3">
                <Typography>Select</Typography>
                <SelectEx/>
            </Card>
            <Card className="p-3 m-3">
                <Typography>Slider</Typography>
                <SliderEx/>
            </Card>
            <Card className="p-3 m-3">
                <Typography>Switch</Typography>
                <SwitchEx/>
            </Card>
            <Card className="p-3 m-3">
                <Typography>Text Field</Typography>
                <TextFieldEx/>
            </Card>
            <Card className="p-3 m-3">
                <Typography>Transfer list</Typography>
                <TransferListEx/>
            </Card>
            <Card className="p-3 m-3">
                <Typography>Toggle button</Typography>
                <ToggleButtonEx />
            </Card>
            <Card className="p-3 m-3">
                <Typography></Typography>

            </Card>
            <Card className="p-3 m-3">
                <Typography></Typography>

            </Card>
        </>
    );
}


