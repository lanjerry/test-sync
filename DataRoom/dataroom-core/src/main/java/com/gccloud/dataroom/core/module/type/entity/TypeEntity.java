/*
 * Copyright 2023 http://gcpaas.gccloud.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.gccloud.dataroom.core.module.type.entity;

import com.baomidou.mybatisplus.annotation.FieldStrategy;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import com.gccloud.dataroom.core.constant.PageDesignConstant;
import com.gccloud.common.entity.SuperEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;

/**
 * 页面基本信息表
 *
 * @Author qianxing
 * @Date 2022/06/07
 * @Version 1.0.0
 */
@Data
@TableName(value = "big_screen_type", autoResultMap = true)
@ApiModel
public class TypeEntity extends SuperEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(notes = "分类中文名称")
    private String name;

    @ApiModelProperty(notes = "分类编码")
    @TableField(updateStrategy = FieldStrategy.NEVER)
    private String code;

    /**
     * 参考：{@link PageDesignConstant.CategoryType}
     */
    @ApiModelProperty(notes = "分类类型")
    private String type;

    @ApiModelProperty(notes = "排序")
    private Integer orderNum;

}