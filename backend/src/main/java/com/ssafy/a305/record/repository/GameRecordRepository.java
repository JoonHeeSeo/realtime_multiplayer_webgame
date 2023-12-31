package com.ssafy.a305.record.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ssafy.a305.record.domain.GameRecord;

@Repository
public interface GameRecordRepository extends JpaRepository<GameRecord, Integer> {
	List<GameRecord> findAllByStageOrderByClearTime(Integer stage);
}
