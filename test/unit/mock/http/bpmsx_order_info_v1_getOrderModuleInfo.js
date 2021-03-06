export default function (params, mockParams = {}) {
  const data = {
    'orderMatterRecordList': [
      {
        'acceptTime': 1547174631000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'MortgagePass',
        'fromName': '抵押递件_有赎楼产品',
        'handleTime': 1550843895000,
        'handleUserId': '10000025793406',
        'handleUserName': '刘杰',
        'houseNo': '20181200055832',
        'id': '20000038895019',
        'isHandled': '1',
        'isHaveHandleRight': '1',
        'matterKey': 'MortgagePass',
        'matterName': '抵押递件',
        'read': '0',
        'relateId': '20000038894992',
        'relateType': 'BPM_TASK',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1547086920000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'taskCreator',
        'fromName': '任务事项的产生器',
        'handleTime': 1547174631000,
        'handleUserId': '70000000240014',
        'handleUserName': '王文积',
        'houseNo': '20181200055832',
        'id': '10000074712558',
        'isHandled': '0',
        'isHaveHandleRight': '1',
        'matterKey': 'RandomMark',
        'matterName': '赎楼登记',
        'read': '0',
        'relateId': '10000074712557',
        'relateType': 'BPM_TASK',
        'remark': '',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1545358364000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'AccountTest',
        'fromName': '账户测试',
        'handleTime': 1547085372000,
        'handleUserId': '10000025793620',
        'handleUserName': '毛海波',
        'houseNo': '20181200055832',
        'id': '10000071415241',
        'isHandled': '1',
        'isHaveHandleRight': '1',
        'matterKey': 'AccountTest',
        'matterName': '账户测试',
        'read': '0',
        'relateId': '10000071415213',
        'relateType': 'BPM_TASK',
        'remark': '',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1546055443000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'TrustAccount',
        'fromName': '要件托管',
        'handleTime': 1546845679000,
        'handleUserId': '70000000240014',
        'handleUserName': '王文积',
        'houseNo': '20181200055832',
        'id': '20000036887247',
        'isHandled': '1',
        'isHaveHandleRight': '1',
        'matterKey': 'TrustAccount',
        'matterName': '要件托管',
        'read': '0',
        'relateId': '20000036887245',
        'relateType': 'BPM_TASK',
        'remark': '',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1545358364000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'tdxxdj_v25',
        'fromName': '同贷信息登记',
        'handleTime': 1546845663000,
        'handleUserId': '70000000240014',
        'handleUserName': '王文积',
        'houseNo': '20181200055832',
        'id': '10000071415212',
        'isHandled': '1',
        'isHaveHandleRight': '1',
        'matterKey': 'AgreeLoanMark',
        'matterName': '同贷信息登记',
        'read': '0',
        'relateId': '10000071415184',
        'relateType': 'BPM_TASK',
        'remark': '',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1545358365000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'TrustAccount',
        'fromName': '要件托管',
        'handleTime': 1546055443000,
        'handleUserId': '70000000240014',
        'handleUserName': '王文积',
        'houseNo': '20181200055832',
        'id': '10000071415302',
        'isHandled': '1',
        'isHaveHandleRight': '1',
        'matterKey': 'TrustAccount',
        'matterName': '要件托管',
        'read': '0',
        'relateId': '10000071415275',
        'relateType': 'BPM_TASK',
        'remark': '',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1545358365000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'PreRandomIsr_',
        'fromName': '预约赎楼',
        'handleTime': 1546055403000,
        'handleUserId': '70000000240014',
        'handleUserName': '王文积',
        'houseNo': '20181200055832',
        'id': '10000071415274',
        'isHandled': '1',
        'isHaveHandleRight': '1',
        'matterKey': 'PreRandom',
        'matterName': '预约赎楼',
        'read': '0',
        'relateId': '10000071415247',
        'relateType': 'BPM_TASK',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1545358366000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'taskCreator',
        'fromName': '任务事项的产生器',
        'handleTime': 1545794198000,
        'handleUserId': '70000000240014',
        'handleUserName': '王文积',
        'houseNo': '20181200055832',
        'id': '10000071415393',
        'isHandled': '1',
        'isHaveHandleRight': '0',
        'matterKey': 'Interview',
        'matterName': '面签',
        'read': '0',
        'relateId': '10000071415392',
        'relateType': 'BPM_TASK',
        'remark': '',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1545358364000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'ApplyLoan',
        'fromName': '申请贷款',
        'houseNo': '20181200055832',
        'id': '10000071415183',
        'isHandled': '0',
        'isHaveHandleRight': '1',
        'matterKey': 'ApplyLoan',
        'matterName': '申请贷款',
        'read': '0',
        'relateId': '10000071415156',
        'relateType': 'BPM_TASK',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1545358365000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'QueryArchive',
        'fromName': '查档',
        'houseNo': '20181200055832',
        'id': '10000071415335',
        'isHandled': '0',
        'isHaveHandleRight': '1',
        'matterKey': 'QueryArchive',
        'matterName': '查档',
        'read': '0',
        'relateId': '10000071415307',
        'relateType': 'BPM_TASK',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1545358365000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '1',
        'fromKey': 'Notarization',
        'fromName': '办理公证',
        'houseNo': '20181200055832',
        'id': '10000071415379',
        'isHandled': '0',
        'isHaveHandleRight': '1',
        'matterKey': 'Notarization',
        'matterName': '办理公证',
        'read': '0',
        'relateId': '10000071415352',
        'relateType': 'BPM_TASK',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1546845679000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'TrustAccount',
        'fromName': '要件托管',
        'houseNo': '20181200055832',
        'id': '20000038164626',
        'isHandled': '0',
        'isHaveHandleRight': '1',
        'matterKey': 'TrustAccount',
        'matterName': '要件托管',
        'read': '0',
        'relateId': '20000038164624',
        'relateType': 'BPM_TASK',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1547085372000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'AccountTest',
        'fromName': '账户测试',
        'houseNo': '20181200055832',
        'id': '20000038686882',
        'isHandled': '0',
        'isHaveHandleRight': '1',
        'matterKey': 'AccountTest',
        'matterName': '账户测试',
        'read': '0',
        'relateId': '20000038686880',
        'relateType': 'BPM_TASK',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1547174631000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'GetCancelMaterial',
        'fromName': '领取注销资料',
        'houseNo': '20181200055832',
        'id': '20000038894935',
        'isHandled': '0',
        'isHaveHandleRight': '1',
        'matterKey': 'GetCancelMaterial',
        'matterName': '领取注销资料',
        'read': '0',
        'relateId': '20000038894908',
        'relateType': 'BPM_TASK',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1547174631000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'MortgageOut',
        'fromName': '抵押出件_有赎楼产品',
        'houseNo': '20181200055832',
        'id': '20000038894963',
        'isHandled': '0',
        'isHaveHandleRight': '1',
        'matterKey': 'MortgageOut',
        'matterName': '抵押出件',
        'read': '0',
        'relateId': '20000038894936',
        'relateType': 'BPM_TASK',
        'status': 'NORMAL'
      },
      {
        'acceptTime': 1547174631000,
        'applyNo': 'FZC0120190227015',
        'deleteFlag': '0',
        'fromKey': 'CancleMortgage',
        'fromName': '注销抵押',
        'houseNo': '20181200055832',
        'id': '20000038894991',
        'isHandled': '0',
        'isHaveHandleRight': '1',
        'matterKey': 'CancleMortgage',
        'matterName': '注销抵押',
        'read': '0',
        'relateId': '20000038894964',
        'relateType': 'BPM_TASK',
        'status': 'NORMAL'
      }
    ],
    'accountList': [],
    'applyOrder': {
      'applyNo': 'FZC0120190227015',
      'applyStatus': 'applycheckinterviewed',
      'applyTime': 1551260191000,
      'branchId': '591000',
      'buyerName': '江富华',
      'buyerPhone': '99999999',
      'channel': '',
      'cityNo': '',
      'followUpUserid': '',
      'followUpUsername': '',
      'groupApplyNo': '',
      'houseNo': '20190200065731',
      'id': '20000046615717',
      'manCheckFirst': 'N',
      'partnerBankId': '',
      'partnerBankName': '',
      'partnerInsuranceId': 'BHXT',
      'partnerInsuranceName': '渤海信托',
      'preliminaryResult': '',
      'productId': 'TFB_NSL_NJY_ISR',
      'productName': '及时贷（交易赎楼）',
      'relateApplyNo': '',
      'relateType': '',
      'robTime': 1552880200000,
      'robUserId': '10000023520703',
      'robUserName': '叶俊荣',
      'salesBranchId': '591111',
      'salesUserId': '10000027072652',
      'salesUserName': '赵红宇',
      'sellerCardNo': '440304198511089999',
      'sellerCardType': '',
      'sellerName': '吴富,张丽娜丽娜',
      'sellerPhone': '99999999',
      'serviceType': '',
      'thirdpartyName': 'ZYB',
      'thirdpartyNo': ''
    },
    'customerRelList': [
      {
        'applyNo': 'FZC0120190227015',
        'customer': {
          'address': '大道城市花园8号楼8单元8层8号',
          'age': 40,
          'andGuaranteeRelation': '',
          'birthday': '1979-03-17',
          'companyCity': '',
          'companyDepartment': '',
          'companyDistrict': '',
          'companyHr': '',
          'companyHrphone': '',
          'companyHrtel': '',
          'companyHrtelareacode': '',
          'companyName': '',
          'companyProvince': '',
          'companyTel': '',
          'companyTelareacode': '',
          'companyWorkyear': '',
          'companyZipcode': '',
          'contactAddress': '',
          'createTime': 1551346256000,
          'createUserId': '10000027072652',
          'creditChannel': 'offlineprint',
          'creditSouruce': '',
          'custNo': '00212052',
          'customerType': '',
          'defaultContactType': '',
          'defaultMailAddress': '',
          'degree': '',
          'deleteFlag': '0',
          'education': '',
          'email': '',
          'employer': '',
          'employerAddress': '',
          'employerPhone': '',
          'establishmentYear': '',
          'explaintext': '',
          'familyStatus': '',
          'formerIdCard': '',
          'formerName': '',
          'graduationSchool': '',
          'hasCar': '',
          'hasChildren': '',
          'hasHouse': '',
          'hasLocalhouse': '',
          'hasRegister': '',
          'headship': '',
          'homeTelareacode': '',
          'homeTelephone': '',
          'houseCity': '',
          'houseDetailaddr': '',
          'houseDistrict': '',
          'houseProvince': '',
          'id': '10000080342011',
          'idCardAddress': '贵州省六盘水市福来县红水镇大福村三组',
          'idCardNo': '230231197805128838',
          'idCardType': 'CER',
          'idCardValidity': '2027-09-29',
          'idcardOrgan': '',
          'incomeCompanyType': '',
          'incomeType': '',
          'individualType': '',
          'industry': '',
          'industryType': '',
          'jobType': '',
          'liveCity': '',
          'liveDetailaddr': '',
          'liveDistrict': '',
          'liveProvince': '',
          'liveZipcode': '',
          'maritalStatus': 'UMR',
          'otherRelation': '00211428',
          'monthIncome': '',
          'monthlyIncome': 9999.00,
          'name': '江富华',
          'occupancy': '',
          'occupation': '',
          'originBelong': '',
          'originCity': '',
          'originDetailaddr': '',
          'originDistrict': '',
          'originProvince': '',
          'originType': '',
          'phone': '99999999',
          'provideOtherPersonalLocalResidences': 'N',
          'qqNumber': '',
          'residenceSettle': '',
          'rev': 0,
          'sex': 'M',
          'specialAreaCode': '',
          'specialStateAreaCode': '',
          'techpost': '',
          'updateTime': 1551459667000,
          'updateUserId': '20000015544072',
          'wechatNumber': '',
          'workNature': ''
        },
        'customerNo': '00212052',
        'hasCommonBorrower': '',
        'id': '10000080342010',
        'isActualBorrowerName': 'N',
        'isProposer': 'N',
        'relation': 'CQR',
        'role': 'OWN'
      },
      {
        'applyNo': 'FZC0120190227015',
        'customer': {
          'address': '大道城市花园8号楼8单元8层8号',
          'age': 31,
          'birthday': '1988-02-10',
          'createTime': 1551260192000,
          'createUserId': '10000027072652',
          'creditChannel': 'offlineprint',
          'custNo': '00211428',
          'deleteFlag': '0',
          'id': '20000046615648',
          'idCardAddress': '贵州省六盘水市福来县红水镇大福村三组',
          'idCardNo': '230231197202164362',
          'idCardType': 'CER',
          'idCardValidity': '2036-08-29',
          'incomeType': 'OTH',
          'maritalStatus': 'UMR',
          'otherRelation': '00212052',
          'monthlyIncome': 9999.00,
          'name': '吴富',
          'phone': '18199999999',
          'provideOtherPersonalLocalResidences': 'N',
          'rev': 0,
          'sex': 'M',
          'updateTime': 1551459667000,
          'updateUserId': '20000015544072'
        },
        'customerNo': '00211428',
        'hasCommonBorrower': '',
        'id': '20000046615719',
        'isActualBorrowerName': 'N',
        'isProposer': 'Y',
        'relation': 'CQR',
        'role': 'OWN'
      },
      {
        'applyNo': 'FZC0120190227015',
        'customer': {
          'address': '大道城市花园8号楼8单元8层8号',
          'age': 32,
          'birthday': '1987-11-18',
          'createTime': 1551260192000,
          'createUserId': '10000027072652',
          'creditChannel': 'offlineprint',
          'custNo': '00211429',
          'deleteFlag': '0',
          'id': '20000046615650',
          'idCardAddress': '贵州省六盘水市福来县红水镇大福村三组',
          'idCardNo': '230231198308138458',
          'idCardType': 'CER',
          'idCardValidity': '2036-02-03',
          'maritalStatus': 'MRI',
          'monthlyIncome': 9999.00,
          'name': '张富娜',
          'phone': '18999999999',
          'provideOtherPersonalLocalResidences': 'N',
          'rev': 0,
          'sex': 'F',
          'updateTime': 1551459667000,
          'updateUserId': '20000015544072'
        },
        'customerNo': '00211429',
        'hasCommonBorrower': '',
        'id': '20000046615720',
        'isActualBorrowerName': 'N',
        'isProposer': 'Y',
        'relation': 'DSFSKR',
        'role': 'OWN'
      }
    ],
    'dealInfo': {
      'actualTradingPrice': 3730000.00,
      'applyNo': '',
      'dealNo': '',
      'houseNo': '20190200065731',
      'id': '20000046981355',
      'remark': '',
      'tradingPrice': 3730000.00
    },
    'feeSummary': {
      'applyNo': 'FZC0120190227015',
      'borrowingAmount': 800000.000000,
      'endBearing': '',
      'hasInvoice': '',
      'id': '20000046615723',
      'isSameBank': '',
      'paymentWay': '',
      'platformDueDate': '',
      'platformValueDate': '',
      'preUseAmountDate': 1553679360000,
      'premiumPaymentParty': '',
      'priceDiscount': 0,
      'priceTag': '',
      'productTerm': '',
      'productTermAndChargeWay': '',
      'randomPayMode': '',
      'refundSource': '',
      'remark': '',
      'riskGrade': '',
      'sellerAccountType': '',
      'servicePaymentParty': '',
      'tailAccountType': '',
      'tailPayMode': ''
    },
    'newLoan': {
      'agreeLoanOtherRemark': '',
      'agreeLoanSource': '',
      'agreeLoanType': '',
      'applyNo': '',
      'bizLoanAmount': 100,
      'borrowContNo': '',
      'borrowerType': 'PERSONAL',
      'contractNo': '',
      'currency': '',
      'firstRegulationBankAccount': '',
      'firstRegulationBankCode': '',
      'firstRegulationBankName': '',
      'fundLoanTerms': '',
      'fundTermUnit': '',
      'hasFundSupervision': '',
      'haveNewLoan': '',
      'houseNo': '20190200064817',
      'id': '10000079664146',
      'isHaveFundLoan': '',
      'isNeedMortgage': '',
      'isPayTypeCheck': '',
      'isRegulationFlag': '',
      'isRelease': '',
      'loanTerms': '',
      'maxMortgageNo': '',
      'naturalFloatType': '',
      'naturalRateCode': '',
      'newBankAddress': '',
      'newBankEmail': '',
      'newBankPhone': '',
      'newBankUser': '',
      'newLoanBankCode': '',
      'newLoanBankName': '',
      'newLoanCustomer': '',
      'newLoanCustomerTel': '',
      'newLoanFundCenter': '',
      'newLoanGuaranty': '',
      'newLoanType': '',
      'providentFundCenter': '',
      'remark': '',
      'repayMethodLoan': '',
      'revolvingCreditFlag': '',
      'sellerCardNo': '',
      'sellerName': '',
      'serialNo': '',
      'termUnit': '',
      'thirdPayee': '',
      'thirdType': '',
      'transferLoanCause': ''
    },
    'houseList': [
      {
        'houseAddress': '大道城市花园8号楼8单元8层8号',
        'houseAreaCode': '',
        'houseCertNo': '郑房权证字第161234567号',
        'houseNo': '20190200064817',
        'id': '10000079664144',
        'landRightNo': 'QNO03158888',
        'newHouseCertNo': '郑房权证字第181234567号'
      }
    ],
    'isrMixed': {
      'accountPassword': '',
      'applyNo': 'SHS0420190221001',
      'applyOrderAttachComplete': '',
      'approveInfo': '',
      'approveResult': '',
      'bankLoanReason': '',
      'bankLoanReasult': '',
      'bankTailLoanReason': '',
      'bankTailLoanReasult': '',
      'channelMgrName': '',
      'channelMgrNo': '',
      'channelMgrTeamName': '',
      'channelMgrTeamNo': '',
      'channelMgrTel': '',
      'contractNo': '',
      'creditReportId': '',
      'dashuApproveRemark': '',
      'dataupdateReject': '',
      'evaluateValue': '',
      'fundType': '',
      'hasMooInputcomple': '',
      'id': '10000079664150',
      'investigateRemark': '',
      'isAutomatedApproveDone': '',
      'isNeedMortgage': '',
      'isPartnerDingMsgSent': '',
      'isPrestore': '',
      'isPriority': '',
      'isTfb': '',
      'loanResult': '',
      'manCheckResult': '',
      'materialsUploadComment': '',
      'materialsUploadStatus': '',
      'merchantId': '',
      'needCheck': '',
      'needPlatformSend': '',
      'orgApproveRemark': '',
      'orgApproveResult': '',
      'overallState': '',
      'partnerAttachComplete': '1',
      'partnerAttachCompleteTime': 1550739135000,
      'partnersAccount': '',
      'partnersUserName': '',
      'prestoreDay': '',
      'refuseReason': '',
      'remark': '',
      'riskLevel': '',
      'supplyReason': '',
      'tailReleaseNode': 'SPJFQK（HBZS）',
      'tailReleaseNodeName': '审批即放全款（红本在手）',
      'zlwcRemark': ''
    },
    'supervisionList': [],
    'hitRuleList': [
      {
        id: 1,
        applyNo: 'SHS0420190221001',
        'ruleName': '【法讼全文】 法讼裁判文书----未找到诉讼地位',
        ruleType: '',
        promptMessage: '',
        hitMessage: '关键字：在面向对象程序设计中，模拟对象是以可控的方式模拟真实对象行为的假的对象。程序员通常创造模拟对象来测试其他对象的行为，很类似汽车设计者使用碰撞测试假人来模拟车辆碰撞中人的动态行为 ',
        createTime: 1553050432928,
        createUserId: '',
        updateTime: '',
        updateUserId: ''
      },
      {
        id: 2,
        applyNo: 'SHS0420190221001',
        'ruleName': '【法讼全文】 法讼裁判文书----未找到诉讼地位',
        ruleType: '',
        promptMessage: '',
        hitMessage: '关键字：在面向对象程序设计中，模拟对象是以可控的方式模拟真实对象行为的假的对象。程序员通常创造模拟对象来测试其他对象的行为，很类似汽车设计者使用碰撞测试假人来模拟车辆碰撞中人的动态行为 ',
        createTime: 1553050432928,
        createUserId: '',
        updateTime: '',
        updateUserId: ''
      }
    ]
  }
  let jsonData = {}
  const requestModules = params.relationKey
  if (!requestModules) {
    jsonData = data
  }
  requestModules.split(',').forEach(item => {
    jsonData[item] = data[item]
  })

  if (jsonData.applyOrder) {
    if (mockParams.thirdpartyName) {
      jsonData.applyOrder.thirdpartyName = mockParams.thirdpartyName
    }
    if (mockParams.productId) {
      jsonData.applyOrder.productId = mockParams.productId
    }
    if (mockParams.preliminaryResult) {
      jsonData.applyOrder.preliminaryResult = mockParams.preliminaryResult
    }
  }

  return jsonData
}
