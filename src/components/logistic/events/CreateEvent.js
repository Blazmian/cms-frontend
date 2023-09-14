import { CDBBox } from "cdbreact"
import { useState } from "react"
import { Modal, Button } from "react-bootstrap"

const CreateEvent = ({ show, handleClose }) => {

    const [eventType, setEventType] = useState('presential')

    const handleEventType = (e) => {
        setEventType(e)
    } 

    return (
        <>
            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Evento</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div class="form-group row">
                        <label for="inputEvent" class="col-sm-4 col-form-label">Nombre del evento</label>
                        <div class="col-sm-8 mb-3">
                            <input type="Evento" class="form-control" id="inputEvents" placeholder="Evento"></input>
                        </div>

                        <label for="descriptionEvent" class="col-sm-4 col-form-label">Descripcion del evento</label>
                        <div class="col-sm-8 mb-2">
                            <textarea class="form-control" id="DescriptionEvents" rows="3"></textarea>
                        </div>

                        <CDBBox display="flex" flex="fill" class="mb-1">
                            <label for="inputEvent" class="col-sm-4 col-form-label mb-3" style={{ marginRight: '46px' }}>Tipo de evento</label>
                            <div class="form-check form-check-inline" style={{ marginTop: '10px' }}>
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="presential" onClick={(e) => handleEventType('presential')} checked></input>
                                <label class="form-check-label" for="inlineRadio1">Presencial</label>
                            </div>

                            <div class="form-check form-check-inline" style={{ marginTop: '10px' }}>
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="virtual" onClick={(e) => handleEventType('virtual')}></input>
                                <label class="form-check-label" for="inlineRadio2">Virtual</label>
                            </div>

                        </CDBBox>

                        {eventType === 'presential' ?
                            (
                                <>
                                    <label for="inputEvent" class="col-sm-4 col-form-label">Lugar del evento</label>

                                    <div class="col-sm-8 mb-3">
                                        <input type="Evento" class="form-control" id="inputEvents" placeholder="Lugar del evento"></input>
                                    </div>
                                </>)
                            : (<></>)}


                        <label for="inputEvent" class="col-sm-4 col-form-label">Empresa solicitante</label>

                        <div class="col-sm-8 mb-3">
                            <input type="Evento" class="form-control" id="inputEvents" placeholder="Empresa solicitante"></input>
                        </div>

                        <div class="col_one_third col_last c-azul mb-3">
                            <label for="nacimiento" style={{ marginRight: '46px' }}>Fecha del evento<small></small></label>
                            <input type="date" id="nacimiento" name="nacimiento" class="sm-form-control"></input>
                        </div>

                        <CDBBox display="flex" flex="fill" className="mb-1" alignItems="center">
                            <label for="hour" className="me-3">Hora del evento</label>

                            <CDBBox display="flex" alignItems="center" className="me-2" style={{ marginLeft: '35px' }}>
                                <select class="form-control" id="Hour">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                            </CDBBox>

                            <CDBBox display="flex" alignItems="center" className="me-2">
                                <label for="Minutes" className="me-2">:</label>
                                <select class="form-control" id="Minutes">
                                    <option>00</option><option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option>
                                    <option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option>
                                    <option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option>
                                    <option>30</option><option>31</option><option>32</option><option>33</option><option>34</option><option>35</option><option>36</option><option>37</option><option>38</option><option>39</option>
                                    <option>40</option><option>41</option><option>42</option><option>43</option><option>44</option><option>45</option><option>46</option><option>47</option><option>48</option><option>49</option>
                                    <option>50</option><option>51</option><option>52</option><option>53</option><option>54</option><option>55</option><option>56</option><option>57</option><option>58</option><option>59</option>
                                </select>
                            </CDBBox>

                            <CDBBox display="flex" alignItems="center">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>AM</option>
                                    <option>PM</option>
                                </select>
                            </CDBBox>

                        </CDBBox>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Cancelar</Button>
                    <Button variant="primary">Crear</Button>
                </Modal.Footer>

            </Modal>
        </>
    )

}

export default CreateEvent