import { CDBIcon } from "cdbreact"
import { Stack } from "react-bootstrap"

const ToastManager = ({ title, text, type }) => {

    /**
     * COLOR OF TYPE
     * 
     * -White-
     * Danger, Success, Dark, Primary
     * 
     * -Gray-
     * Warning
     * 
     */

    const iconMap = {
        warning: 'exclamation-triangle',
        danger: 'exclamation-circle',
        primary: 'info-circle',
        dark: 'info-circle',
        success: 'check-circle',
    }

    const iconName = iconMap[type] || 'question-circle'

    return (
        <div style={{ maxWidth: '25rem' }} className={`p-3 w-100 bg-${type} shadow rounded-2`}>
            <Stack direction="horizontal" className="justify-content-start align-items-center">
                {type === 'warning' ? <CDBIcon icon={iconName} size="2x" /> : <CDBIcon inverse icon={iconName} size="2x" />}
                <Stack className="ms-3">
                    <p style={type === 'warning' ? { color: '#272727' } : { color: '#E6E6E6' }} className="fw-medium m-0">{title}</p>
                    <p style={type === 'warning' ? { color: '#464646' } : { color: 'white' }} className="m-0">{text}</p>
                </Stack>
            </Stack>
        </div>
    )
}

export default ToastManager