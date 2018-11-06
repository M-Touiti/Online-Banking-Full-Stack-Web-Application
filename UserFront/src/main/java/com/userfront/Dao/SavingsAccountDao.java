package com.userfront.Dao;

import com.userfront.domain.SavingsAccount;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by MTouiti on 11/05/18.
 */
public interface SavingsAccountDao extends CrudRepository<SavingsAccount, Long> {

    SavingsAccount findByAccountNumber (int accountNumber);
}
