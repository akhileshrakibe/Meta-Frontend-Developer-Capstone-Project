import {it, expect, describe, vi} from 'vitest';
import { fireEvent, getAllByRole, getAllByTestId, getAllByText, getByLabelText, getByTestId, render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from './App';
import Main from './components/Main/Main';
import Booking from './components/Booking/Booking';

describe("Booking", () => {

    const AppRoute = () => {

        return (
            <App>
                <Router>
                    <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/booking" element={<Booking />}></Route>
                    </Routes>
                </Router>
            </App>
        )
    }
    
    it('Should render the heading', () => {
        render(<AppRoute />);

        const headingElement = screen.getByText("Reserve Table");
        expect(headingElement).toBeInTheDocument();

    })

    it('Reserve Table button', () => {
        render(<AppRoute />);

        const reserveButton = screen.getByText("Reserve Table");
        fireEvent.click(reserveButton)

    })

    it('Firstname check', () => {
        render(<AppRoute />);

        const fnameinput = screen.getByPlaceholderText(/Firstname/)
        fireEvent.change(fnameinput, {target: {value: "John"}}) 
        expect(fnameinput.getAttribute("value")).toBe("John")
    })

    it('Lastname check', () => {
        render(<AppRoute />);

        const lnameinput = screen.getByPlaceholderText(/Lastname/)
        fireEvent.change(lnameinput, {target: {value: "Elder"}}) 
        expect(lnameinput.getAttribute("value")).toBe("Elder")
    })

    it('Date check', () => {

        render(<AppRoute />);

        const date = screen.getByTestId("select-date")
        fireEvent.change(date, {target: {value: "2020-05-24"}}) 
        expect(date.getAttribute("value")).toBe("2020-05-24")
    })

    it('Time check', () => {

        render(<AppRoute />);

        const time = screen.getByTestId("select-time")
        fireEvent.change(time, {target: {value: "10:30"}}) 
        expect(time.getAttribute("value")).toBe("10:30")
    })
 
    it('Quantity check', () => {

        render(<AppRoute />);

        const qinput = screen.getByPlaceholderText(/No. of Guests/)
        fireEvent.change(qinput, {target: {value: "9"}}) 
        expect(qinput.getAttribute("value")).toBe("9")
    })

    it('Select option', () => {

        const { getByTestId, getAllByTestId } = render(<AppRoute />);

        fireEvent.change(getByTestId("select"), { target: {value: "1"} }) 
        let options = getAllByTestId('select-option')
        expect(options[0].selected).toBeTruthy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeFalsy();

    })

    it('Submit button', () => {

        render(<AppRoute />);

        const fnameinput = screen.getByPlaceholderText(/Firstname/);
        const lnameinput = screen.getByPlaceholderText(/Lastname/);
        const date = screen.getByTestId("select-date")
        const time = screen.getByTestId("select-time")
        const qinput = screen.getByPlaceholderText(/No. of Guests/)

        const submitButton = screen.getByText("Submit");
        fireEvent.click(submitButton);
        expect(fnameinput.getAttribute("value")).toBe("")
        expect(lnameinput.getAttribute("value")).toBe("")
        expect(date.getAttribute("value")).toBe("")
        expect(time.getAttribute("value")).toBe("")
        expect(qinput.getAttribute("value")).toBe("")

        let options = screen.getAllByTestId('select-option')
        expect(options[0].selected).toBeTruthy();
        expect(options[1].selected).toBeFalsy();
        expect(options[2].selected).toBeFalsy();

    })

})