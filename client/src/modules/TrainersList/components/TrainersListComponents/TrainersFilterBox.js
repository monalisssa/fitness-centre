import React, {useEffect, useState} from 'react';
import {Button,  Container, Form} from "react-bootstrap";
import {FaSearch} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {getAllTrainers, searchTrainerBySurname, filterTrainers} from "../../store/trainersSlice";
import {formatYears, getArrayExperienceYears, getArraySpecialities} from "../../utils/getArraySpecialities";

const TrainersFilterBox = ({filter, setFilter, setLoading, admin}) => {

    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch();
    const trainers = useSelector(state => state.trainers);

    const [genderFilter, setGenderFilter] = useState('')
    const [specialityFilter, setSpecialityFilter] = useState('')
    const [experienceFilter, setExperienceFilter] = useState('')


    const [trainersSpecialities, setTrainersSpecialities] = useState(getArraySpecialities(trainers.trainers))
    const [trainersExperiences, setTrainersExperiences] = useState(getArrayExperienceYears(trainers.trainers))


    const resetFilter = () =>
    {
        setSpecialityFilter('')
        setGenderFilter('')
        setExperienceFilter('')
    }

    useEffect(() => {
        setLoading(true);

        dispatch(getAllTrainers());

        setTimeout(() => {
            if (searchValue !== "") {
                dispatch(searchTrainerBySurname(searchValue));
            }

            setLoading(false);
        }, 1000);
    }, [searchValue]);


    useEffect(() => {

       const filter = {
           gender: genderFilter,
           speciality: specialityFilter,
           experience: experienceFilter
       }

        setLoading(true);
        dispatch(getAllTrainers());

        setTimeout(() => {
            if (genderFilter || specialityFilter || experienceFilter) {
                dispatch(filterTrainers(filter));
            }

            setLoading(false);
        }, 1000);

    }, [genderFilter, specialityFilter, experienceFilter]);

    return (
        <Container className={` ${admin ? "" : "w-1/4 mt-5 flex flex-col gap-5"}`}>
            <Form className={`flex gap-5 ${admin ? "" : "flex-col w-full"}`}>
                    <div className={` ${admin ? "w-1/4 flex flex-col gap-3" : ""}`}>
                        <div className=" w-100">
                            <h4 className="mb-3">Поиск</h4>

                            <div className="relative">
                                <Form.Control className="bg-zinc-800 focus:bg-zinc-800 text-sm p-2 text-white"
                                              placeholder="Введите фамилию или имя..."
                                              value={searchValue}
                                              onChange={(event) => setSearchValue(event.target.value)}
                                >
                                </Form.Control>

                                <div
                                    className="absolute top-50 right-3 -translate-y-1/2 cursor-pointer hover:scale-125 transition-all duration-1000">
                                    <FaSearch/>
                                </div>
                            </div>

                        </div>

                        <div>
                            Сортировка по рейтингу
                        </div>
                    </div>



                <div className="flex flex-col gap-3">
                    <h4>Фильтры</h4>

                    <Form.Select aria-label="Default select example" className="bg-zinc-800 text-white"
                                 onChange={(event) => setSpecialityFilter(event.target.value)}
                                 value={specialityFilter}>
                        <option value={""}>Все специализации</option>
                        {
                            trainersSpecialities.map(el =>
                                <>
                                    <option value={el}>{el}</option>
                                </>
                            )
                        }
                    </Form.Select>

                    <Form.Select aria-label="Default select example" className="bg-zinc-800 text-white" onChange={(event) => setExperienceFilter(event.target.value)}
                                 value={experienceFilter}
                    >
                        <option value={""}>Любой опыт работы</option>
                        {
                            trainersExperiences.map(el =>
                                <>
                                    <option value={el}>{el} {formatYears(el)}</option>
                                </>
                            )
                        }
                    </Form.Select>


                    <div className="flex justify-center gap-3 fs-6">
                                <Form.Check
                                    label="Мужской"
                                    name="group1"
                                    type={"radio"}
                                    id={`reverse-1`}
                                    value="Мужской"
                                    checked={genderFilter === "Мужской"}
                                    onChange={(event) => setGenderFilter(event.target.value)}
                                />
                                <Form.Check
                                    label="Женский"
                                    name="group1"
                                    type={"radio"}
                                    id={`reverse-2`}
                                    value="Женский"
                                    checked={genderFilter === "Женский"}
                                    onChange={(event) => setGenderFilter(event.target.value)}
                                />
                    </div>


                </div>

            </Form>

            <Button className="btn" onClick={() => resetFilter()}>
                Сбросить фильтры
            </Button>
        </Container>
    );
};

export default TrainersFilterBox;