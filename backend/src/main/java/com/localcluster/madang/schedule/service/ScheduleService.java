package com.localcluster.madang.schedule.service;

import com.localcluster.madang.schedule.Schedule;
import com.localcluster.madang.schedule.repository.ScheduleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ScheduleService {
    private final ScheduleRepository repository;

    @Transactional(readOnly = true)
    public List<Schedule> getAllSchedules() {
        return repository.findAll();
    }

    @Transactional
    public Schedule createSchedule(Schedule schedule) {
        if (schedule.getStartTime().isAfter(schedule.getEndTime())) {
            throw new IllegalArgumentException("Start time cannot be after end time.");
        }
        return repository.save(schedule);
    }
}
