import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AutocompleteEx from "src/page-section/mui-component/input/AutocompleteEx.tsx";
import ButtonEx from "src/page-section/mui-component/input/ButtonEx.tsx";
import ButtonGroupEx from "src/page-section/mui-component/input/ButtonGroupEx.tsx";
import CheckboxEx from "src/page-section/mui-component/input/CheckboxEx.tsx";
import FloatingActionButtonEx from "src/page-section/mui-component/input/FloatingActionButtonEx.tsx";
import RadioGroupEx from "src/page-section/mui-component/input/RadioGroupEx.tsx";
import RatingEx from "src/page-section/mui-component/input/RatingEx.tsx";
import SelectEx from "src/page-section/mui-component/input/SelectEx.tsx";
import SliderEx from "src/page-section/mui-component/input/SliderEx.tsx";
import SwitchEx from "src/page-section/mui-component/input/SwitchEx.tsx";
import TextFieldEx from "src/page-section/mui-component/input/TextFieldEx.tsx";
import TransferListEx from "src/page-section/mui-component/input/TransferListEx.tsx";
import ToggleButtonEx from "src/page-section/mui-component/input/ToggleButtonEx.tsx";
import BadgeEx from "src/page-section/mui-component/data-display/BadgeEx.tsx";
import ChipEx from "src/page-section/mui-component/data-display/ChipEx.tsx";
import DividerEx from "src/page-section/mui-component/data-display/DividerEx.tsx";
import IconsEx from "src/page-section/mui-component/data-display/IconsEx.tsx";
import ListEx from "src/page-section/mui-component/data-display/ListEx.tsx";
import TableEx from "src/page-section/mui-component/data-display/TableEx.tsx";
import AvatarEx from "src/page-section/mui-component/data-display/AvatarEx.tsx";
import TypographyEx from "src/page-section/mui-component/data-display/TypographyEx.tsx";
import TooltipEx from "src/page-section/mui-component/data-display/TooltipEx.tsx";
import BoxEx from "src/page-section/mui-component/layout/BoxEx.tsx";
import ContainerEx from "src/page-section/mui-component/layout/ContainerEx.tsx";
import GridEx from "src/page-section/mui-component/layout/GridEx.tsx";
import ImageListEx from "src/page-section/mui-component/layout/ImageListEx.tsx";
import StackEx from "src/page-section/mui-component/layout/StackEx.tsx";
import MasonryEx from "src/page-section/mui-component/mui-lab/MasonryEx.tsx";
import TimelineEx from "src/page-section/mui-component/mui-lab/TimelineEx.tsx";
import ChartEx from "src/page-section/mui-component/mui-x/ChartEx.tsx";
import DataGridEx from "src/page-section/mui-component/mui-x/DataGridEx.tsx";
import DateTimePickerEx from "src/page-section/mui-component/mui-x/DateTimePickerEx.tsx";
import TreeViewEx from "src/page-section/mui-component/mui-x/TreeViewEx.tsx";
import BackdropEx from "src/page-section/mui-component/feedback/BackdropEx.tsx";
import AlertEx from "src/page-section/mui-component/feedback/AlertEx.tsx";
import DialogEx from "src/page-section/mui-component/feedback/DialogEx.tsx";
import ProgressEx from "src/page-section/mui-component/feedback/ProgressEx.tsx";
import SkeletonEx from "src/page-section/mui-component/feedback/SkeletonEx.tsx";
import SnackbarEx from "src/page-section/mui-component/feedback/SnackbarEx.tsx";
import BottomNavigationEx from "src/page-section/mui-component/navigation/BottomNavigationEx.tsx";
import BreadcrumbsEx from "src/page-section/mui-component/navigation/BreadcrumbsEx.tsx";
import DrawerEx from "src/page-section/mui-component/navigation/DrawerEx.tsx";
import LinkEx from "src/page-section/mui-component/navigation/LinkEx.tsx";
import MenuEx from "src/page-section/mui-component/navigation/MenuEx.tsx";
import PaginationEx from "src/page-section/mui-component/navigation/PaginationEx.tsx";
import SpeedDialEx from "src/page-section/mui-component/navigation/SpeedDialEx.tsx";
import StepperEx from "src/page-section/mui-component/navigation/StepperEx.tsx";
import TabsEx from "src/page-section/mui-component/navigation/TabsEx.tsx";
import AccordionEx from "src/page-section/mui-component/surfaces/AccordionEx.tsx";
import AppbarEx from "src/page-section/mui-component/surfaces/AppbarEx.tsx";
import CardEx from "src/page-section/mui-component/surfaces/CardEx.tsx";
import PaperEx from "src/page-section/mui-component/surfaces/PaperEx.tsx";
import ClickAwayListenerEx from "src/page-section/mui-component/utils/ClickAwayListenerEx.tsx";
import ModalEx from "src/page-section/mui-component/utils/ModalEx.tsx";
import FocusTrapEx from "src/page-section/mui-component/utils/FocusTrapEx.tsx";
import NoSSREx from "src/page-section/mui-component/utils/NoSSREx.tsx";
import PopperEx from "src/page-section/mui-component/utils/PopperEx.tsx";
import PopoverEx from "src/page-section/mui-component/utils/PopoverEx.tsx";
import PopupEx from "src/page-section/mui-component/utils/PopupEx.tsx";
import TextareaAutosizeEx from "src/page-section/mui-component/utils/TextareaAutosizeEx.tsx";
import TransitionEx from "src/page-section/mui-component/utils/TransitionEx.tsx";
import PortalEx from "src/page-section/mui-component/utils/PortalEx.tsx";


export default function MUIComponent() {
    return (
        <div className="p-2 m-2">
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Input</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Auto complete</Typography>
                    <AutocompleteEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Button</Typography>
                    <ButtonEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Button group</Typography>
                    <ButtonGroupEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Checkbox</Typography>
                    <CheckboxEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Floating action button</Typography>
                    <FloatingActionButtonEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Radio group</Typography>
                    <RadioGroupEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Rating</Typography>
                    <RatingEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Select</Typography>
                    <SelectEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Slider</Typography>
                    <SliderEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Switch</Typography>
                    <SwitchEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Text Field</Typography>
                    <TextFieldEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Transfer list</Typography>
                    <TransferListEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Toggle button</Typography>
                    <ToggleButtonEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Data display</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Avatar</Typography>
                    <AvatarEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Badge</Typography>
                    <BadgeEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Chip</Typography>
                    <ChipEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Divider</Typography>
                    <DividerEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Icons</Typography>
                    <IconsEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">List</Typography>
                    <ListEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Table</Typography>
                    <TableEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Tooltip</Typography>
                    <TooltipEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Typography</Typography>
                    <TypographyEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Layout</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Box</Typography>
                    <BoxEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Container</Typography>
                    <ContainerEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Grid</Typography>
                    <GridEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">ImageList</Typography>
                    <ImageListEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Stack</Typography>
                    <StackEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">MUI Lab</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Masonry</Typography>
                    <MasonryEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Timeline</Typography>
                    <TimelineEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">MUI X</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Chart</Typography>
                    <ChartEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">DataGrid</Typography>
                    <DataGridEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">DateTime Picker</Typography>
                    <DateTimePickerEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Tree View</Typography>
                    <TreeViewEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Feedback</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Alert</Typography>
                    <AlertEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Backdrop</Typography>
                    <BackdropEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Dialog</Typography>
                    <DialogEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Progress</Typography>
                    <ProgressEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Skeleton</Typography>
                    <SkeletonEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Snackbar</Typography>
                    <SnackbarEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Navigation</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Bottom Navigation</Typography>
                    <BottomNavigationEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Breadcrumb</Typography>
                    <BreadcrumbsEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Drawer</Typography>
                    <DrawerEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Link</Typography>
                    <LinkEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Menu</Typography>
                    <MenuEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Pagination</Typography>
                    <PaginationEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Speed Dial</Typography>
                    <SpeedDialEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Stepper</Typography>
                    <StepperEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Tabs</Typography>
                    <TabsEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Surfaces</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Accordion</Typography>
                    <AccordionEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Appbar</Typography>
                    <AppbarEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Card</Typography>
                    <CardEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Paper</Typography>
                    <PaperEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Utils</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Click away listener</Typography>
                    <ClickAwayListenerEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Focus trap</Typography>
                    <FocusTrapEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Modal</Typography>
                    <ModalEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">NoSSR</Typography>
                    <NoSSREx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Popover</Typography>
                    <PopoverEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Popper</Typography>
                    <PopperEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Popup</Typography>
                    <PopupEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Portal</Typography>
                    <PortalEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Textarea autosize</Typography>
                    <TextareaAutosizeEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Typography variant="h5">Transition</Typography>
                    <TransitionEx/>
                </Box>
            </Box>
        </div>
    );
}


