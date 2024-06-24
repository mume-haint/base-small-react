import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
    AutocompleteEx,
    ButtonEx,
    ButtonGroupEx,
    CheckboxEx,
    FloatingActionButtonEx,
    RadioGroupEx, RatingEx, SelectEx, SliderEx, SwitchEx, TextFieldEx, ToggleButtonEx, TransferListEx
} from "src/page-section/mui-component/input";
import {
    AvatarEx,
    BadgeEx,
    ChipEx,
    DividerEx,
    IconsEx,
    ListEx,
    TableEx, TooltipEx, TypographyEx
} from "src/page-section/mui-component/data-display";
import {BoxEx, ContainerEx, GridEx, ImageListEx, StackEx} from "src/page-section/mui-component/layout";
import {MasonryEx, TimelineEx} from "src/page-section/mui-component/mui-lab";
import {ChartEx, DataGridEx, DateTimePickerEx, TreeViewEx} from "src/page-section/mui-component/mui-x";
import {
    AlertEx,
    BackdropEx,
    DialogEx,
    ProgressEx,
    SkeletonEx,
    SnackbarEx
} from "src/page-section/mui-component/feedback";
import {
    BottomNavigationEx,
    BreadcrumbsEx,
    DrawerEx,
    LinkEx,
    MenuEx,
    PaginationEx, SpeedDialEx, StepperEx, TabsEx
} from "src/page-section/mui-component/navigation";
import {AccordionEx, AppbarEx, CardEx, PaperEx} from "src/page-section/mui-component/surfaces";
import {
    ClickAwayListenerEx,
    FocusTrapEx,
    ModalEx,
    NoSSREx,
    PopoverEx,
    PopperEx, PopupEx, PortalEx, TextareaAutosizeEx, TransitionEx
} from "src/page-section/mui-component/utils";
import Link from "@mui/material/Link";



export default function MUIComponent() {
    return (
        <div className="p-2 m-2">
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/all-components/">All component</Link>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Input</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-autocomplete/">Auto complete</Link>
                    <AutocompleteEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-button/">Button</Link>
                    <ButtonEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-button-group/">Button group</Link>
                    <ButtonGroupEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-checkbox/">Checkbox</Link>
                    <CheckboxEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-floating-action-button/">Floating action button</Link>
                    <FloatingActionButtonEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-radio-button/">Radio group</Link>
                    <RadioGroupEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-rating/">Rating</Link>
                    <RatingEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-select/">Select</Link>
                    <SelectEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-slider/">Slider</Link>
                    <SliderEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-switch/">Switch</Link>
                    <SwitchEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-text-field/">Text Field</Link>
                    <TextFieldEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-transfer-list/">Transfer list</Link>
                    <TransferListEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-toggle-button/">Toggle button</Link>
                    <ToggleButtonEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Data display</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-avatar/">Avatar</Link>
                    <AvatarEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-badge/">Badge</Link>
                    <BadgeEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-chip/">Chip</Link>
                    <ChipEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-divider/">Divider</Link>
                    <DividerEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/icons/">Icons</Link>
                    <IconsEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-list/">List</Link>
                    <ListEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-table/">Table</Link>
                    <TableEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-tooltip/">Tooltip</Link>
                    <TooltipEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-typography/">Typography</Link>
                    <TypographyEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Layout</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-box/">Box</Link>
                    <BoxEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-container/">Container</Link>
                    <ContainerEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-grid/">Grid</Link>
                    <GridEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-stack/">Stack</Link>
                    <StackEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-image-list/">ImageList</Link>
                    <ImageListEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">MUI Lab</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-masonry/">Masonry</Link>
                    <MasonryEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-timeline/">Timeline</Link>
                    <TimelineEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">MUI X</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/x/react-charts/">Chart</Link>
                    <ChartEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/x/react-data-grid/">DataGrid</Link>
                    <DataGridEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/x/react-date-pickers/">DateTime Picker</Link>
                    <DateTimePickerEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/x/react-tree-view/">Tree View</Link>
                    <TreeViewEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Feedback</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-alert/">Alert</Link>
                    <AlertEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-backdrop/">Backdrop</Link>
                    <BackdropEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-dialog/">Dialog</Link>
                    <DialogEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-progress/">Progress</Link>
                    <ProgressEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-skeleton/">Skeleton</Link>
                    <SkeletonEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-snackbar/">Snackbar</Link>
                    <SnackbarEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Navigation</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-bottom-navigation/">Bottom Navigation</Link>
                    <BottomNavigationEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-breadcrumbs/">Breadcrumb</Link>
                    <BreadcrumbsEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-drawer/">Drawer</Link>
                    <DrawerEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-link/">Link</Link>
                    <LinkEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-menu/">Menu</Link>
                    <MenuEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-pagination/">Pagination</Link>
                    <PaginationEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-speed-dial/">Speed Dial</Link>
                    <SpeedDialEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-stepper/">Stepper</Link>
                    <StepperEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-tabs/">Tabs</Link>
                    <TabsEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Surfaces</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-accordion/">Accordion</Link>
                    <AccordionEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-app-bar/">Appbar</Link>
                    <AppbarEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-card/">Card</Link>
                    <CardEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-paper/">Paper</Link>
                    <PaperEx/>
                </Box>
            </Box>
            <Box className="bg-gray-100 border-2 p-3 m-3">
                <Typography variant="h3">Utils</Typography>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-click-away-listener/">Click away listener</Link>
                    <ClickAwayListenerEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/base-ui/react-focus-trap/">Focus trap</Link>
                    <FocusTrapEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-modal/">Modal</Link>
                    <ModalEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-no-ssr/">NoSSR</Link>
                    <NoSSREx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-popover/">Popover</Link>
                    <PopoverEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-popper/">Popper</Link>
                    <PopperEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/base-ui/react-popup/">Popup</Link>
                    <PopupEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-portal/">Portal</Link>
                    <PortalEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/react-textarea-autosize/">Textarea autosize</Link>
                    <TextareaAutosizeEx/>
                </Box>
                <Box className="p-3 m-3 border-4 border-gray-200 rounded-lg">
                    <Link variant="h5" color="common.black" className="block w-fit pb-3" href="https://mui.com/material-ui/transitions/">Transition</Link>
                    <TransitionEx/>
                </Box>
            </Box>
        </div>
    );
}


