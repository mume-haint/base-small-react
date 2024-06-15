import Switch from '@mui/material/Switch';
import {FormControlLabel, FormGroup} from "@mui/material";

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function SwitchEx() {
    return (
        <div>
            <Switch {...label} defaultChecked />
            <Switch {...label} />
            <Switch {...label} disabled defaultChecked />
            <Switch {...label} disabled />
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                <FormControlLabel required control={<Switch />} label="Required" />
                <FormControlLabel disabled control={<Switch />} label="Disabled" />
            </FormGroup>
        </div>
    );
}
