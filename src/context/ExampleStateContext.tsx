import {
    createContext,
    PropsWithChildren,
    SetStateAction,
    useContext,
    useMemo,
    useState,
} from 'react'

interface StateData {
    id: number,
    data: string
}

interface StateContextProps {
    stateData: StateData[]
    setStateData: (value: SetStateAction<StateData[]>) => void
    addStateData: () => void
    updateStateData: (id: number, data: StateData) => void
    deleteStateData: (id: number) => void
}

const ExampleStateContext = createContext<StateContextProps | undefined>(undefined)

export const useStateProvider = (): StateContextProps => {
    const data = useContext<StateContextProps | undefined>(ExampleStateContext)
    if (data === undefined) {
        throw new Error(
            'useAssigneeByProjectProvider must be used within a AssigneeByProjectProvider tag',
        )
    }
    return data
}

export function StateProvider({ children }: PropsWithChildren) {
    const [stateData, setStateData] = useState<StateData[]>([])

    const addStateData = () => {
        const newData : StateData = {
            id: new Date().getTime(),
            data: `${new Date().getTime()} data`,
        }
        const data = [...stateData, newData]
        setStateData(data)
    }

    const updateStateData = (id: number, body: StateData) => {
        const {
            data
        } = body
        const currentStateData = [...stateData]
        const index = currentStateData.findIndex(item => item.id == id)
        if(index !== -1) {
            currentStateData[index] = {
                ...currentStateData[index],
                data
            }
            setStateData(currentStateData)
        }
    }

    const deleteStateData = (id: number) => {
        const assigneeData = [...stateData].filter(item => item.id != id)
        setStateData(assigneeData)
    }

    const StateProviderValue = useMemo(
        () => ({
            stateData,
            setStateData,
            addStateData,
            updateStateData,
            deleteStateData
        }),
        [stateData, setStateData, addStateData, updateStateData, deleteStateData],
    )

    return (
        <ExampleStateContext.Provider value={StateProviderValue}>
            {children}
        </ExampleStateContext.Provider>
    )
}
