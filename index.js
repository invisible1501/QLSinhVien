import React from "react";
import RenderSV from "./renderSV";

function QLSinhVien() {
    const SinhVien = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            age: 30,
            live: "Hà Nội"
        },
        {
            id: 2,
            name: "Trần Văn D",
            age: 11,
            live: "Cần Thơ"
        },
        {
            id: 3,
            name: "Nguyễn Văn B",
            age: 30,
            live: "Đà Nẵng"
        },
        {
            id: 4,
            name: "Nguyễn Văn C",
            age: 18,
            live: "Sóc Trăng"
        },
        {
            id: 5,
            name: "Nguyễn Văn C",
            age: 39,
            live: "Đồng Nai"
        },
        {
            id: 6,
            name: "Trần Văn B",
            age: 80,
            live: "Hà Nội"
        },
        {
            id: 7,
            name: "Nguyễn Văn B",
            age: 35,
            live: "HN"
        },
        {
            id: 8,
            name: "Trà Thụy Trúc Mai",
            age: 21,
            live: "TP Hồ Chí Minh"
        },
        {
            id: 9,
            name: "Vũ Nhật Nam",
            age: 21,
            live: "TPHCM"
        }
    ];

    return (
        <table>
            {SinhVien.map(sinhvien => {
                const {id, name, age, live} = sinhvien;
                return ( 
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{live}</td>
                    </tr>
                );
            })}
        </table>
    );
}

export default QLSinhVien;